// Return a new array by applying the callback function to each item.
// Example:
// mapBy([1, 2, 3], n => n * 2) -> [2, 4, 6]
export function mapBy<T, U>(arr: T[], fn: (item: T) => U): U[] {
  throw new Error("Not implemented")
}

// Count how many items fall into each group.
// The callback returns the group name for each item.
// Example:
// countBy(['ant', 'bear', 'cat'], word => String(word.length)) -> { '3': 2, '4': 1 }
export function countBy<T>(arr: T[], fn: (item: T) => string): Record<string, number> {
  throw new Error("Not implemented")
}

// Return the last item in the array.
// If the array is empty, return undefined.
// Example:
// last([1, 2, 3]) -> 3
// last([]) -> undefined
export function last<T>(arr: T[]): T | undefined {
  throw new Error("Not implemented")
}

// Return a new array containing only the items that match the condition.
// Example:
// filterBy([1, 2, 3, 4], n => n > 2) -> [3, 4]
export function filterBy<T>(arr: T[], fn: (item: T) => boolean): T[] {
  throw new Error("Not implemented")
}

// NOTE on generics used here:
// T = the type of each item in the array (e.g. { name: string, age: number })
// K = a key of T (e.g. "name" or "age")
// `K extends keyof T` means K must be a valid property name from T
// This lets TypeScript ensure the key exists and the return type matches that property
// Return an array containing the value of one property from each object.
// Example:
// pluck([{ name: 'Ana', age: 22 }, { name: 'Ben', age: 30 }], 'name') -> ['Ana', 'Ben']
export function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  throw new Error("Not implemented")
}

// Apply the callback function two times to the starting value.
// Example:
// applyTwice(2, n => n + 1) -> 4
export function applyTwice(value: number, fn: (n: number) => number): number {
  throw new Error("Not implemented")
}