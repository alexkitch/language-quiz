import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoadingSpinner } from '@components/LoadingSpinner'

describe('LoadingSpinner', () => {
    test('should render', () => {
        render(<LoadingSpinner />)
        expect(screen.getByAltText('Loading Spinner')).toBeDefined()
    })
})
