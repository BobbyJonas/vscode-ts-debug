/* eslint-disable @typescript-eslint/naming-convention */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
];

// ============= Your Code Here =============
type MergeObjTypes<T> = {
  [key in keyof T]: T[key];
};
type RequiredByKeys<T, K = keyof T> = MergeObjTypes<
  {
    [key in keyof T as key extends K ? key : never]-?: T[key];
  } & {
    [key in keyof T as key extends K ? never : key]: T[key];
  }
>;

type TestRequiredByKeys = RequiredByKeys<User, 'name'>;
