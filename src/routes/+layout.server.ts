import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ request }) => {
	let logged_in = false;
	let signup_page = request.url.includes('signup');

	// Check cookie to see if logged in
	// verify if the aws_credentials / token is still valid

	// if no valid credentials/token then show sign up page

	if (!logged_in && !signup_page) redirect(307, '/signup');
	if (logged_in && signup_page) redirect(301, '/');
	
  return {
		exams: []
	};
};

/** SATURDAY:
 *
 *  * login in with google and navigate to the homepage
 * 
 *  * create an user in the dynamodb table every time you create a cognito user ( lambda ?? )
 *  * IAM stuff
 *      * create IAM role for the app can use to fetch the exam names
 *      * create IAM role for the user to fetch an exam paper from the exam
 *
 *    !!! How is authentication linked between: IAM roles - Identity pools - SDK
 *        * can I create an IAM role with access keys to give to my app so it can fetch the exam info from dynamo?
 *
 *    !!! Hosting on AWS amplify with domain elsewhere
 * 
 * 		!!! Google cloud and TP sign in credentials
 * 
 * 		!!! what does the app client do in the authentication process
 *
 * GOAL 1: have stripe -> PDF -> S3 link -> email pipeline configured by FRIDAY 15/11/24
 * GOAL 2: launch live PDF payments on AWS amplify -> WEDNESDAY 20/11/24 (have back up plan up and running before spending day in the office)
 *
 */
