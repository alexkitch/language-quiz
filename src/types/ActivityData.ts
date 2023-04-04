import { QuestionData } from './QuestionData'
import { RoundData } from './RoundData'
import { Orderable } from './Orderable'

export interface ActivityData extends Orderable {
    activity_name: string
    questions: RoundData[] | QuestionData[]
}

export function isRound(data: QuestionData | RoundData): data is RoundData {
    return 'round_title' in data
}

export function isQuestion(
    data: QuestionData | RoundData
): data is QuestionData {
    return 'stimulus' in data
}
