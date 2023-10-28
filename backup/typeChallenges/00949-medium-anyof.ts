/* eslint-disable @typescript-eslint/naming-convention */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>
];

// ============= Your Code Here =============

type CheckTrue<T> = T extends 0 | false | '' | undefined | null ? false : true;
type Or<A, B> = A extends true ? true : B extends true ? true : false;
type AnyOf<T extends any[]> = T['length'] extends 0
  ? false
  : T['length'] extends 1
  ? CheckTrue<T[0]>
  : T extends [T[0], ...infer Tail]
  ? Or<CheckTrue<T[0]>, AnyOf<Tail>>
  : false;

type TestAnyOfType = AnyOf<[0, '', false, [], {}, undefined, null]>;
