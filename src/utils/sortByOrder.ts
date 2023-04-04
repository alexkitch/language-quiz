import { Orderable } from '@customTypes/Orderable'

export const sortByOrder = <T extends Orderable>(a: T, b: T) =>
    a.order - b.order
