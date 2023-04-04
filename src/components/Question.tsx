import { QuestionData } from '@customTypes/QuestionData'

export type QuestionProps = {
    question: QuestionData
    onAnswered: (correct: boolean) => void
}

export const Question = (props: QuestionProps) => {
    return (
        <div className="w-[512px]">
            <h1
                role="heading"
                className="px-10 pb-10"
            >{`Q${props.question.order}.`}</h1>
            <p
                role="contentinfo"
                className="px-10 py-4 border-y border-y-sky-200 bg-sky-50"
            >
                {props.question.stimulus}
            </p>
            <div className="px-20 flex h-24 justify-between">
                <button
                    data-testid="correct-button"
                    className="uppercase font-bold"
                    onClick={() => props.onAnswered(true)}
                >
                    Correct
                </button>
                <button
                    data-testid="incorrect-button"
                    className="uppercase font-bold"
                    onClick={() => props.onAnswered(false)}
                >
                    Incorrect
                </button>
            </div>
        </div>
    )
}
