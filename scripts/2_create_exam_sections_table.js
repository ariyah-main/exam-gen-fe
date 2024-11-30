import { CreateTableCommand, DynamoDBClient } from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({
	region: 'us-west-2', // region is still required, even for local usage
	endpoint: 'http://localhost:8000', // Local DynamoDB endpoint
	credentials: {
		accessKeyId: 'fakeAccessKeyId', // Dummy credentials for local use
		secretAccessKey: 'fakeSecretAccessKey'
	}
});

export const main = async () => {
	const command = new CreateTableCommand({
		TableName: 'ExamSection',
		AttributeDefinitions: [
			{
				AttributeName: 'slug',
				AttributeType: 'S'
			},
			{
				AttributeName: 'exam',
				AttributeType: 'S'
			}
		],
		KeySchema: [
			{
				AttributeName: 'slug',
				KeyType: 'HASH'
			},
			{
				AttributeName: 'exam',
				KeyType: 'RANGE'
			}
		],
		ProvisionedThroughput: {
			ReadCapacityUnits: 5,
			WriteCapacityUnits: 5
		}
	});
	const response = await client.send(command);
	console.log(response);
	return response;
};

main();
