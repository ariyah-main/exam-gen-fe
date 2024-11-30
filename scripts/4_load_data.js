import exams from '../src/data/exams.js';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { PutCommand, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({
	region: 'us-west-2', // region is still required, even for local usage
	endpoint: 'http://localhost:8000', // Local DynamoDB endpoint
	credentials: {
		accessKeyId: 'fakeAccessKeyId', // Dummy credentials for local use
		secretAccessKey: 'fakeSecretAccessKey'
	}
});

const exam_commands = [];
const section_commands = [];
const topic_commands = [];
const failed_commands = [];

function generate_slug(string) {
	return string.toLowerCase().replaceAll(' ', '_');
}

function add_topic_command(topic, section, index) {
	const slug = generate_slug(topic.title);
	const command = new PutCommand({
		TableName: 'SectionTopic',
		Item: {
			slug,
			section: section,
			title: topic.title,
			goal: topic.goal,
			skills: JSON.stringify(topic.skills),
			training_questions: JSON.stringify(topic.training_questions),
			order: index + 1
		}
	});
	topic_commands.push(command);
}

function add_section_command(section, exam, index) {
	const slug = generate_slug(section.title);
	const command = new PutCommand({
		TableName: 'ExamSection',
		Item: {
			exam: exam,
			title: section.title,
			slug,
			order: index + 1
		}
	});
	section_commands.push(command);

	section.topics.forEach((topic, i) => add_topic_command(topic, slug, i));
}

function add_exam_commands(exam) {
	const slug = generate_slug(exam.title);
	const command = new PutCommand({
		TableName: 'Exam',
		Item: {
			title: exam.title,
			slug,
			logo: 'test'
		}
	});
	exam_commands.push(command);
	exam.sections.forEach((section, i) => add_section_command(section, slug, i));
}

async function run_command(command) {
	const docClient = DynamoDBDocumentClient.from(client);
	const slug = command.input.Item.slug;
	const table = command.input.TableName;
	try {
		const response = await docClient.send(command);
	} catch (error) {
		failed_commands.push(`${table}::${slug} - ` + error?.code ?? '');
	}
}

async function populate_tables() {
	for (const command of [...exam_commands, ...section_commands, ...topic_commands]) {
		await run_command(command);
	}
}

add_exam_commands(exams[0]);
// exams.forEach(exam => add_exam_commands(exam));
await populate_tables();

if (failed_commands.length > 0) {
	console.log('Failed Commands:');
	failed_commands.forEach((c) => console.log(c));
}

