/* eslint-disable @typescript-eslint/naming-convention */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
];

// ============= Your Code Here =============
type TupleToNestedObject<T extends Array<string>, U> = T['length'] extends 0
  ? U
  : T['length'] extends 1
  ? { [key in T[0]]: U }
  : T extends [...infer Head extends string[], infer Tail extends string]
  ? TupleToNestedObject<Head, { [key in Tail]: U }>
  : [];

type TestTupleToNestedObject = TupleToNestedObject<['a', 'b'], string>;
