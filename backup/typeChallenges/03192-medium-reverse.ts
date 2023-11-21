/* eslint-disable @typescript-eslint/naming-convention */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
];

// type errors = [Reverse<'string'>, Reverse<{ key: 'value' }>];

// ============= Your Code Here =============
type Reverse<T extends Array<any>, U extends Array<any> = []> = T extends [
  ...infer Head,
  infer Tail,
]
  ? Reverse<Head, [...U, Tail]>
  : U;

type TestReverseType = Reverse<['a', 'b']>;
