/* eslint-disable @typescript-eslint/naming-convention */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >,
];

type errors = [
  // @ts-expect-error
  FlipArguments<'string'>,
  // @ts-expect-error
  FlipArguments<{ key: 'value' }>,
  // @ts-expect-error
  FlipArguments<['apple', 'banana', 100, { a: 1 }]>,
  // @ts-expect-error
  FlipArguments<null | undefined>,
];

// ============= Your Code Here =============

type ReturnType<T extends Function> = T extends (...args: any) => infer A ? A : never;
type ParamsType<T extends Function> = T extends (...args: infer P) => any ? P : never;
type Flip<T extends Array<any>, U extends Array<any> = []> = T['length'] extends 0
  ? U
  : T extends [infer Head, ...infer Tail]
  ? Flip<Tail, [Head, ...U]>
  : U;
type FlipArguments<T extends Function> = (...args: Flip<ParamsType<T>>) => ReturnType<T>;
type TestFlipArguments = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>;
