import { describe, expect, test } from 'vitest'

describe('sortByOrder', () => {
    test('sorts by order', () => {
        const a = { order: 1 }
        const b = { order: 2 }
        const c = { order: 3 }

        const items = [c, a, b]
        items.sort((a, b) => a.order - b.order)

        expect(items).toEqual([a, b, c])
    })
})
