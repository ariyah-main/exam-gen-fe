import OpenAI from 'openai';
import domain_3 from '../src/domain_3.js';
// const openai = new OpenAI();

// const system_content = 'You work for amazon and you are creating replica/mock exam exam for the aws certified cloud practitioner exam. The questions you generate will be in the same style as real aws certified cloud practitioner exam questions and they will be limited to the scope as the exam.';
const system_content = `You are a system that takes takes the information from a piece of text and reformats it into an objects like this:  
{ 
"name": the number and name of the task statement,
"goal": a sentence explaining what the task statement wants to test knowledge of, 
"skills": an array of strings where each entry is a bullet point from the "skill in" section and the examples have been formatted to not use brackets. 
Here is the I have created from the text.  
{
  "name": "1.1 Define the benefits of the AWS Cloud",
   "goal": "Tests whether the individual understands the value proposition of using cloud based services, AWS services in particular", 
"skills": [
	"understanding the economies of associated with using the cloud e.g. cost savings",
	"understanding the benefits of using global infrastructure e.g. speed of deployment, global reach",
	]
} 
For example you took this piece of text:
"Task Statement 1.1: Define the benefits of the AWS Cloud. 
Knowledge of: 
• Value proposition of the AWS Cloud
Skills in:
• Understanding the economies of scale (for example, cost savings)
• Understanding the benefits of global infrastructure (for example, speed of
deployment, global reach)"

and turned it into this object:
{
  "name": "1.1 Define the benefits of the AWS Cloud",
   "goal": "Tests whether the individual understands the value proposition of using cloud based services, AWS services in particular", 
"skills": [
	"understanding the economies of associated with using the cloud e.g. cost savings",
	"understanding the benefits of using global infrastructure e.g. speed of deployment, global reach",
	]
}`;

const user_content = `format this text:
${domain_3[0]}
`;

console.log(user_content);
// const completion = await openai.chat.completions.create({
// 	model: 'gpt-4o-mini',
// 	messages: [
// 		{ role: 'system', content: 'You are a helpful assistant.' },
// 		{
// 			role: 'user',
// 			content: 'Write a haiku about recursion in programming.'
// 		}
// 	]
// });

// console.log(completion.choices[0].message);
