/* eslint-disable @typescript-eslint/naming-convention */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>,
];

// ============= Your Code Here =============
type FlattenElement<
  T,
  Dep extends number = 1,
  Current extends Array<any> = [],
> = Current['length'] extends Dep
  ? [T]
  : T extends Array<any>
  ? T extends [infer Head, ...infer Tail]
    ? [...FlattenElement<Head, Dep, [...Current, 1]>, ...FlattenElement<Tail, Dep, Current>]
    : T
  : [T];
type FlattenDepth<
  T extends Array<any>,
  Dep extends number = 1,
  R extends Array<any> = [],
> = T extends [infer Head, ...infer Tail]
  ? [...FlattenElement<Head, Dep>, ...FlattenDepth<Tail, Dep>]
  : R;
type TestFlattenDepth = FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>;
