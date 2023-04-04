import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { QuestionData } from '@customTypes/QuestionData'
import { Question } from '@components/Question'

let fakeQuestionData: QuestionData = {
    order: 1,
    stimulus: 'Test Stimulus',
    is_correct: false,
    user_answers: [],
    feedback: '',
}

describe('Question component', () => {
    test('should render the question header', () => {
        // Act
        render(<Question question={fakeQuestionData} onAnswered={() => {}} />)
        // Assert
        expect(screen.getByRole('heading')?.textContent).toBe(
            `Q${fakeQuestionData.order}.`
        )
    })

    test('should render the question stimulus', () => {
        // Act
        render(<Question question={fakeQuestionData} onAnswered={() => {}} />)
        // Assert
        expect(screen.getByRole('contentinfo')?.textContent).toBe(
            fakeQuestionData.stimulus
        )
    })

    test.each([
        ['correct-button', true],
        ['incorrect-button', false],
    ])(
        'should trigger callback when %s is clicked',
        (testid, expectedValue) => {
            // Arrange
            const onAnswered = vi.fn()
            // Act
            render(
                <Question question={fakeQuestionData} onAnswered={onAnswered} />
            )
            const correctButton = screen.getByTestId(testid)
            fireEvent.click(correctButton)
            // Assert
            expect(onAnswered).toHaveBeenCalledWith(expectedValue)
        }
    )
})
