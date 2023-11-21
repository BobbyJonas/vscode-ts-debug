/* eslint-disable @typescript-eslint/naming-convention */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Shift<unknown>,
  Expect<Equal<Shift<[]>, []>>,
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
];

// ============= Your Code Here =============
type Shift<T> = T extends Array<any>
  ? T['length'] extends 0
    ? T
    : T extends [infer head, ...infer Tail]
    ? Tail
    : T
  : T;
type TestShiftType = Shift<unknown>;
