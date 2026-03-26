# ACS 3310 — Lab 2: Introduction to TypeScript

## Overview

In this lab you will continue learning the basic workflow for using **TypeScript** in a small project.

You will:

- install dependencies
- compile TypeScript
- run tests with Vitest
- solve a set of small TypeScript problems
- practice writing basic type annotations
- use a simple generic function

This lab builds directly on **Lab 1**. The main difference is that the challenge problems in this lab are a little more focused on **writing clear types**.

---

## Learning Goals

By the end of this lab you should be able to:

- annotate variables, parameters, and return values with TypeScript types
- use array types
- write function types for callbacks
- use a simple generic type
- compile and test a small TypeScript project

---

## Student Workflow

1. Accept the GitHub Classroom assignment.
2. Clone your private repository.
3. Install dependencies.
4. Run the tests.
5. Complete the challenge functions in `src/challenges.ts`.
6. Run the tests again until all tests pass.
7. Commit and push your work to GitHub.

---

## Setup

Clone your repository:

```bash
git clone <your-repo-url>
cd ACS-3310-Lab-2
```

Install dependencies:

```bash
npm install
```

Run the tests:

```bash
npm test
```

Compile the project:

```bash
npm run build
```

---

## What You Will Edit

You should only need to edit:

```text
src/challenges.ts
```

Do not modify the test files.

You should also not modify any configuration files (`package.json`, `tsconfig.json`, or `vitest.config.ts`).

---

## Challenge Problems

Focus on writing clear **TypeScript types** for each function.

For each function:

- add or verify parameter types
- add a return type
- use generics where appropriate

Implement the following functions in `src/challenges.ts`.

### 1. `repeat`

Write a function that:

- takes a `text` string
- takes a `count` number
- returns the string repeated `count` times

Example:

```ts
repeat("ha", 3) // "hahaha"
```

---

### 2. `sum`

Write a function that:

- takes an array of numbers
- returns the total of all numbers in the array

Example:

```ts
sum([1, 2, 3]) // 6
```

---

### 3. `getLast`

Write a function that:

- takes an array
- returns the last item in the array

Use a **generic type** so the function works with arrays of many different values.

You should not hard-code this function for a specific type like `number` or `string`.

Examples:

```ts
getLast([1, 2, 3]) // 3
getLast(["a", "b", "c"]) // "c"
```

---

### 4. `filterGreaterThan`

Write a function that:

- takes an array of numbers
- takes a number called `min`
- returns a new array containing only values greater than `min`

Example:

```ts
filterGreaterThan([1, 4, 6, 2], 3) // [4, 6]
```

---

### 5. `mapNames`

Write a function that:

- takes an array of objects
- each object has a `name` property
- returns an array of just the names

Example:

```ts
mapNames([
  { name: "Ana" },
  { name: "Ben" }
])
// ["Ana", "Ben"]
```

---

### 6. `applyTwice`

Write a function that:

- takes a number
- takes a function that transforms a number
- applies the function **two times**
- returns the final result

Example:

```ts
applyTwice(2, n => n + 1) // 4
```

---

## Definition of Done

- all tests pass when you run `npm test`
- the project compiles with no TypeScript errors using `npm run build`
- your code is pushed to GitHub

---

## Suggested Starter Code

Put something like this in `src/challenges.ts`:

```ts
export function repeat(text: string, count: number): string {
  throw new Error("Not implemented")
}

export function sum(nums: number[]): number {
  throw new Error("Not implemented")
}

export function getLast<T>(arr: T[]): T {
  throw new Error("Not implemented")
}

export function filterGreaterThan(nums: number[], min: number): number[] {
  throw new Error("Not implemented")
}

export function mapNames(items: { name: string }[]): string[] {
  throw new Error("Not implemented")
}

export function applyTwice(value: number, fn: (n: number) => number): number {
  throw new Error("Not implemented")
}
```

---

## Suggested Test File

Put something like this in `tests/challenges.test.ts`:

```ts
import { describe, it, expect } from 'vitest'
import {
  repeat,
  sum,
  getLast,
  filterGreaterThan,
  mapNames,
  applyTwice,
} from '../src/challenges'

describe('repeat', () => {
  it('repeats a string', () => {
    expect(repeat('ha', 3)).toBe('hahaha')
  })
})

describe('sum', () => {
  it('adds numbers in an array', () => {
    expect(sum([1, 2, 3])).toBe(6)
  })
})

describe('getLast', () => {
  it('returns the last number', () => {
    expect(getLast([1, 2, 3])).toBe(3)
  })

  it('returns the last string', () => {
    expect(getLast(['a', 'b', 'c'])).toBe('c')
  })
})

describe('filterGreaterThan', () => {
  it('filters numbers greater than min', () => {
    expect(filterGreaterThan([1, 4, 6, 2], 3)).toEqual([4, 6])
  })
})

describe('mapNames', () => {
  it('maps objects to their names', () => {
    expect(mapNames([{ name: 'Ana' }, { name: 'Ben' }])).toEqual(['Ana', 'Ben'])
  })
})

describe('applyTwice', () => {
  it('applies a function two times', () => {
    expect(applyTwice(2, n => n + 1)).toBe(4)
  })
})
```

---

## Submission

Your work is submitted automatically when you push to GitHub.

Use this workflow:

```bash
git add .
git commit -m "complete lab 2"
git push
```

---

## Tips

- Start with the easiest functions first.
- Run the tests often.
- Read the test names carefully.
- Make sure your function signatures are clear before writing the logic.

---
