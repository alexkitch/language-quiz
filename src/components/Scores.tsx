import { isQuestion, isRound } from '@customTypes/ActivityData'
import { QuestionData } from '@customTypes/QuestionData'
import { RoundData } from '@customTypes/RoundData'
import { sortByOrder } from '@utils/sortByOrder'
import { Row } from '@components/Row'

export const Scores = (props: { questions: RoundData[] | QuestionData[] }) => {
    const sortedQuestions = props.questions.sort(sortByOrder)
    return (
        <>
            <h1 className="px-16 pb-10">Results</h1>
            <ul className="w-full">
                {sortedQuestions.map((question) => {
                    if (isQuestion(question)) {
                        return (
                            <Row disabled key={question.stimulus}>
                                {`Q${question.order}`} -{' '}
                                {question.is_correct ===
                                question.user_answers[0]
                                    ? 'Correct'
                                    : 'False'}
                            </Row>
                        )
                    } else if (isRound(question)) {
                        return (
                            <>
                                <Row
                                    key={question.round_title}
                                    disabled
                                    className="font-bold"
                                >
                                    {question.round_title}
                                </Row>
                                {question.questions
                                    .sort(sortByOrder)
                                    .map((q) => (
                                        <Row
                                            disabled
                                            key={`${question.round_title}:${q.order}`}
                                        >
                                            {`Q${q.order}`} -{' '}
                                            {q.is_correct === q.user_answers[0]
                                                ? 'Correct'
                                                : 'False'}
                                        </Row>
                                    ))}
                            </>
                        )
                    }
                })}
            </ul>
        </>
    )
}
