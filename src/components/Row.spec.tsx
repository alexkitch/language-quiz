import { act, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { Row } from '@components/Row'

describe('Row component', () => {
    test('should render the children', () => {
        const testMessage = 'Test Message'
        render(<Row>{testMessage}</Row>)
        expect(screen.getByText(testMessage)).toBeDefined()
    })

    test('should call the onClick callback when clicked', () => {
        const onClick = vi.fn()
        render(<Row onClick={onClick}>Test Message</Row>)
        act(() => {
            screen.getByText('Test Message').click()
        })
        expect(onClick).toHaveBeenCalled()
    })
})
