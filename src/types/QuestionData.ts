import { Orderable } from './Orderable'

export interface QuestionData extends Orderable {
    is_correct: boolean
    stimulus: string
    feedback: string
    user_answers: any[]
}
