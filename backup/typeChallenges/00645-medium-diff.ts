/* eslint-disable @typescript-eslint/naming-convention */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
];

// ============= Your Code Here =============

type Combine<T extends object> = {
  [key in keyof T]: T[key];
};
type Diff<O extends object, O1 extends object> = Combine<
  {
    [key in keyof O as key extends keyof O1 ? never : key]: O[key];
  } & {
    [key in keyof O1 as key extends keyof O ? never : key]: O1[key];
  }
>;

type TestDiffType = Diff<Foo, Coo>;
