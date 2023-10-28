/* eslint-disable @typescript-eslint/naming-convention */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
];

type error = MyOmit<Todo, 'description' | 'invalid'>;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

// ============= Your Code Here =============
type MyExclude<T, K> = T extends K ? never : T;
type MyOmit<T, K> = {
  [k in MyExclude<keyof T, K>]: k extends K ? never : T[k];
};

type TestExcludeType = MyExclude<keyof Todo, 'description'>;
type TestOmitType = MyOmit<Todo, 'description'>;
