/** Site Data */
type slug = string;

type Exam = {
	slug: slug;
	title: string;
	logo: string;
};

type ExamSection = {
	exam_id: slug;
	slug: slug;
	title: string;
	modules: string[];
	order: number;
};

type ExamModule = {
	slug: slug;
	section_id: slug;
	title: string;
	goal: string;
	skills: string[];
	training_questions: string[];
	order: number;
};

type ExamPaper = {
	slug: slug
	exam_id: slug
}

/** Generated Data */
type Question = {
	paper_id: slug;
	text: string;
	correct_answers: string[];
	incorrect_answers: string[];
	index: number;
};

type Answer = {
	text: string;
	reason: string;
};

/** User Data */

type User = {
	cognito_id: string;
	exams: string[]
}

type SavedAnswers = {
	attempt_id: string;
	text: string;
	id: number;
	status: 'correct' | 'incorrect' | 'skipped';
};

type Attempt = {
	id: string;
	exam_id: string;
	score: number;
	status: 'completed' | 'paused' | 'not-started';
	updated_at: Date;
	started_at: Date;
};
