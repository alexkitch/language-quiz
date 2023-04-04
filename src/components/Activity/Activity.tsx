import { useEffect, useMemo, useState } from 'react'
import { ActivityData, isQuestion, isRound } from '@customTypes/ActivityData'
import { QuestionData } from '@customTypes/QuestionData'
import { sortByOrder } from '@utils/sortByOrder'
import { Question } from '@components/Question'
import { Round } from '@components/Round'
import { Scores } from '@components/Scores'

export type ActivityProps = {
    activity: ActivityData
    onActivityClosed: () => void
}

export function Activity(props: ActivityProps) {
    const [currentTaskId, setCurrentTaskId] = useState(0)
    const [displayingScores, setDisplayingScores] = useState(false)

    const sortedTasks = useMemo(
        () => props.activity.questions.sort(sortByOrder),
        [props.activity]
    )
    const currentTask = sortedTasks[currentTaskId]
    const setNextTask = () => setCurrentTaskId((prev) => prev + 1)

    useEffect(() => {
        sortedTasks.forEach((task) => {
            if (isQuestion(task)) {
                task.user_answers = []
            } else if (isRound(task)) {
                task.questions.forEach((q) => (q.user_answers = []))
            }
        })
    }, [])

    useEffect(() => {
        if (currentTaskId >= sortedTasks.length) {
            setDisplayingScores(true)
        }
    }, [currentTaskId])

    const handleQuestionAnswered = (correct: boolean) => {
        if (isQuestion(currentTask)) {
            currentTask.user_answers.push(correct)
        }
        setNextTask()
    }

    const handleRoundCompleted = () => {
        setNextTask()
    }

    const renderActivityName = () => (
        <h2 className="p-10">{props.activity.activity_name}</h2>
    )

    if (displayingScores) {
        return (
            <>
                {renderActivityName()}
                <Scores questions={props.activity.questions} />
                <button
                    className="py-12 uppercase font-bold"
                    onClick={props.onActivityClosed}
                >
                    Home
                </button>
            </>
        )
    }

    if (!currentTask) return <></>
    if (isRound(currentTask)) {
        return (
            <>
                {renderActivityName()}
                <Round
                    round={currentTask}
                    onRoundCompleted={handleRoundCompleted}
                />
            </>
        )
    }

    if (isQuestion(currentTask)) {
        return (
            <>
                {renderActivityName()}
                <Question
                    question={currentTask as QuestionData}
                    onAnswered={(correct) => {
                        handleQuestionAnswered(correct)
                    }}
                />
            </>
        )
    }

    return <></>
}
