import { act, render, screen } from '@testing-library/react'
import { describe, test, expect, beforeEach, vi, afterEach } from 'vitest'
import { QuizData } from '@customTypes/QuizData'
import { Home } from '@components/Home'

let quizData = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: {
        name: 'Test Quiz',
        heading: 'Test Heading',
        activities: [
            {
                activity_name: 'Test Activity',
                order: 1,
                questions: [
                    {
                        order: 1,
                        stimulus: 'Test Stimulus',
                    },
                ],
            },
            {
                activity_name: 'Test Activity 2',
                order: 2,
                questions: [],
            },
        ],
    } as QuizData,
}

describe('Home component', () => {
    beforeEach(() => {
        vi.mock('../hooks/useQuizData', () => ({
            useQuizData: () => ({
                quizData,
            }),
        }))
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    test('should render the loading spinner when fetching the quiz data', () => {
        quizData.isLoading = true
        render(<Home />)
        expect(screen.getByAltText('Loading Spinner')).toBeDefined()
    })

    test('should render an error if the quiz data fails to load', () => {
        quizData.isError = true
        render(<Home />)
        expect(screen.getByTestId('fetch-error')).toBeDefined()
    })

    describe('when the quiz data has loaded successfully', () => {
        beforeEach(() => {
            quizData.isSuccess = true
        })

        test('should render the quiz name', () => {
            render(<Home />)
            expect(screen.getByText(quizData.data.name)).toBeDefined()
        })

        test('should render a button for each activity', () => {
            render(<Home />)
            const buttons = screen.getAllByRole('button')
            buttons.forEach((button, index) => {
                expect(button.textContent).toBe(
                    quizData.data.activities[index].activity_name
                )
            })
        })

        test('clicking a button should render the activity', () => {
            render(<Home />)
            const button = screen.getByText(
                quizData.data.activities[0].activity_name
            )
            act(() => {
                button.click()
            })
            const stimulus = screen.getByRole('contentinfo')
            expect(stimulus.textContent).toBe('Test Stimulus')
        })
    })
})
