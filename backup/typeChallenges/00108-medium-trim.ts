/* eslint-disable @typescript-eslint/naming-convention */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>
];

// ============= Your Code Here =============

type Space = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends `${Space}${infer P}` | `${infer P}${Space}` ? Trim<P> : S;
type TestTrimType = Trim<'   \n\t foo bar \t'>;
