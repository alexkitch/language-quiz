import { useEffect, useState } from 'react'
import { RoundData } from '@customTypes/RoundData'
import { sortByOrder } from '@utils/sortByOrder'
import { Question } from '@components/Question'

export type RoundProps = {
    round: RoundData
    onRoundCompleted: () => void
}

export const Round = (props: RoundProps) => {
    const [hasBegun, setHasBegun] = useState(false)
    const [currentQuestionId, setCurrentQuestionId] = useState(0)

    const sortedQuestions = props.round.questions.sort(sortByOrder)
    const isComplete = () =>
        hasBegun && currentQuestionId >= sortedQuestions.length
    const getCurrentQuestion = () => sortedQuestions[currentQuestionId]

    const goToNextQuestion = () => {
        setCurrentQuestionId((prev) => prev + 1)
    }

    const handleQuestionAnswered = (correct: boolean) => {
        const question = getCurrentQuestion()
        question?.user_answers.push(correct)
        goToNextQuestion()
    }

    useEffect(() => {
        if (isComplete()) {
            props.onRoundCompleted()
        }
    }, [currentQuestionId, hasBegun])

    useEffect(() => {
        setHasBegun(false)
        setCurrentQuestionId(0)
    }, [props.round])

    if (!hasBegun) {
        return (
            <div className="px-10 w-[512px] h-64 flex flex-col justify-between items-start">
                <h1>{props.round.round_title}</h1>
                <button
                    className="uppercase font-bold py-10"
                    onClick={() => setHasBegun(true)}
                >
                    Begin
                </button>
            </div>
        )
    }

    return !isComplete() ? (
        <Question
            question={getCurrentQuestion()}
            onAnswered={(correct) => handleQuestionAnswered(correct)}
        />
    ) : null
}
