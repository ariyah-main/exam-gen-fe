import exams_list from '../src/data/exams.json' with {type: "json"}

/**
 * 
 * This function will create a mock exam question for a cloud exam. 
 *				 
 * @param {} exam cloud exam you want to create a question for
 * @param {*} domain the domain of the exam you want the question to test
 * @param {*} type 	the type of question you want to create. default is scenario based questions 
 *  as that is most of the exam -  option to create to create specific "feature" questions
 * @param {*} task_statement the skills you want to question to test you on
 */

 const Question = z.object({
	text: z.string(),
	correct_answers: z.array(Answer),
	incorrect_answers: z.array(Answer),
  });
 const Answer = z.object({
	text: z.string(),
	explanation: z.string(),
  });


  function format_prompt(cloud_exam, domain, task_statement, type ){
	const exam = exams_list.exams.find(e => e.name === cloud_exam)

	if(!exam) throw "exam not found"

	domain = exam.domains.find(d => d.name === domain)

	if(!domain) throw "exam not found"

	task_statement = domain.task_statements.find(t => t.name === task_statement)

	if(!task_statement) throw "exam not found"

	let skills_list = ''
	let questions_list = ''
	task_statement.skills.forEach((skill,i) => {
		skills_list += `${i+1}.` + skill + ' '
	});
	task_statement.training_questions.forEach((q,i) => {
		skills_list += `${i+1}.` + q + ' '
	});

	return `
		I have been studying for the ${exam} exam. 
		I want to practice some mock exam questions to help me prepare. 

		Can you generate a multiple choice, ${type} based question based on the following requirements:
		1. the question must test that I understand this domain of the AWS Cloud: ${domain}
		2. the question must test that I understand this section of that domain: ${task_statement}
		2a. This is the goal that the question is trying to achieve: ${task_statement.goal}. The question should test my understanding of this. 
		2b. These are the skills that this section of the domain wants me to have: ${skills_list.slice(0,skills_list.length -2)}. The question should test me on these areas. 
		2c. These are some questions from the real ${exam} exam that test the same section of the domain as I specified: ${questions_list}. The question should match the style, tone, language, and difficulty of these questions.
		3. The question you generate must also come with 4 possible answers. There can be 1 or 2 correct answers to a question and the answers must be json objects with the following schema: 
			type Answer = {
				text: a possible answer to the question
				explanation: an explanation of why this answer is correct or incorrect
			}
		4. the output must be a json object with the following schema: 
			type GeneratedQuestion = {
				text: the mock exam question for the ${exam} exam
				correct_answers: an array of the 1 or 2 correct answers to the question
				incorrect_answers: an array of 3 or 2 incorrect answers to the question
			}
	`
  }


function generate_exam_question(cloud_exam, domain, task_statement, type = 'scenario') {

	try {
		const question_prompt = format_prompt(cloud_exam,domain,task_statement,type)

		console.log(question_prompt)
		
	} catch (e){

	}
}

generate_exam_question("AWS Certified Cloud Practitioner","Domain 1: Cloud Concepts", "1.1 Define the benefits of the AWS Cloud")