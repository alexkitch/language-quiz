import { Orderable } from './Orderable'
import { QuestionData } from './QuestionData'

export interface RoundData extends Orderable {
    round_title: string
    questions: QuestionData[]
}

export const isRound = (
    question: QuestionData | RoundData
): question is RoundData => {
    return 'round_title' in question
}
