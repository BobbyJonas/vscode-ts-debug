/* eslint-disable @typescript-eslint/naming-convention */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
];

// ============= Your Code Here =============
type ParseInt<T extends string> = T extends `${infer P extends number}` ? P : never;
type TrimHeadingZero<T extends string> = T extends '0'
  ? T
  : T extends `0${infer Tail}`
  ? TrimHeadingZero<Tail>
  : T;

type ReverseString<T extends string> = T extends `${infer Head extends string}${infer Tail extends
  string}`
  ? `${ReverseString<Tail>}${Head}`
  : T;

type MinusImpl<T extends string> = T extends `${infer Head extends number}${infer Tail extends
  string}`
  ? Head extends 0
    ? `9${MinusImpl<Tail>}`
    : `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][Head]}${Tail}`
  : T;

type PlusImpl<T extends string> = T extends `${infer Head extends number}${infer Tail extends
  string}`
  ? Head extends 9
    ? `0${PlusImpl<Tail>}`
    : `${[1, 2, 3, 4, 5, 6, 7, 8, 9, 0][Head]}${Tail}`
  : T;

type MinusOne<T extends number> = T extends 0
  ? -1
  : `${T}` extends `-${infer Tail}`
  ? ParseInt<`-${TrimHeadingZero<ReverseString<PlusImpl<ReverseString<`${Tail}`>>>>}`>
  : ParseInt<TrimHeadingZero<ReverseString<MinusImpl<ReverseString<`${T}`>>>>>;
