/* eslint-disable @typescript-eslint/naming-convention */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];

// ============= Your Code Here =============
type Last<T extends any[]> = T['length'] extends 1
  ? T[0]
  : T extends [any, ...infer P]
  ? Last<[...P]>
  : never;
type arr1 = ['a', 'b', 'c'];

type tail1 = Last<arr1>;
