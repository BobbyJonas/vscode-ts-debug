/* eslint-disable @typescript-eslint/naming-convention */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  MyPick<Todo, 'title' | 'completed' | 'invalid'>
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

// ============= Your Code Here =============

// ? solution 1
// type MyInclude<T, K> = K extends T ? K : never;
// type MyPick<T, K> = { [key in MyInclude<keyof T, K>]: T[key] };

// ? solution 2
type MyPick<T, K> = { [key in keyof T as key extends K ? key : never]: T[key] };

type TestPickType = MyPick<Todo, 'title' | 'completed'>;
