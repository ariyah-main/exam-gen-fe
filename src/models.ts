type Domain = {
    order: number
    title: string
    slug: string
}

type Task_Statement = {
    title: string
    slug: string
    order: string
    description: string // goal this task statement is trying to achieve (what's the point in learning this)
    skill: string[]
}

type MC_Question = {
    text: string
    correct_answers: Answer[]
    incorrect_answers: Answer[]
    id: number
}

type Answer = {
    text: string
    explanation: string
    question: number
}

type Exam = {
    title: string
    questions: MC_Question[]
    attempts: Attempt[]
    logo: string
}

type Choice = {
    text: string,
    id: number,
    status: 'correct' | 'incorrect' | 'skipped'
}

type Attempt = {
    updated_at: Date
    score: number
    answers: Choice[]
    status: 'completed' | 'paused' | 'not-started'

}