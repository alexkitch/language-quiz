import { act, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { ActivityList } from '@components/Activity/ActivityList'
import { ActivityData } from '@customTypes/ActivityData'

const fakeActivities = [
    {
        activity_name: 'Test Activity 2',
        order: 2,
        questions: [
            {
                order: 1,
                stimulus: 'Test Stimulus',
            },
        ],
    },
    {
        activity_name: 'Test Activity 1',
        order: 1,
        questions: [
            {
                order: 1,
                stimulus: 'Test Stimulus',
            },
        ],
    },
] as ActivityData[]

describe('ActivityList component', () => {
    test('should render the activities in the correct order', () => {
        render(<ActivityList activities={[...fakeActivities]} />)
        const activities = screen.getAllByRole('button')
        expect(activities[0].textContent).toBe('Test Activity 1')
        expect(activities[1].textContent).toBe('Test Activity 2')
    })

    test('should call the onSelectActivity callback when an activity is clicked', () => {
        const onSelectActivity = vi.fn()
        render(
            <ActivityList
                activities={[...fakeActivities]}
                onSelectActivity={onSelectActivity}
            />
        )
        const buttons = screen.getAllByRole('button')
        act(() => {
            buttons[0].click()
        })
        expect(onSelectActivity).toHaveBeenCalledWith(fakeActivities[1])
    })
})
