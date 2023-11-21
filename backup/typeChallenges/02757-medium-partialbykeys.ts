/* eslint-disable @typescript-eslint/naming-convention */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
];

// ============= Your Code Here =============

type MergeType<O> = {
  [P in keyof O]: O[P];
};

type PartialByKeys<T extends object, K = keyof T> = MergeType<
  {
    [key in keyof T as key extends K ? key : never]?: T[key];
  } & {
    [key in keyof T as key extends K ? never : key]: T[key];
  }
>;
