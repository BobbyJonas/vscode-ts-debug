// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>
];

// ============= Your Code Here =============

type IsLetters<T extends string> = T extends Uppercase<T>
  ? T extends Lowercase<T>
    ? false
    : true
  : true;

type TransformUpperCase<T extends string, U extends boolean> = IsLetters<T> extends true
  ? T extends Uppercase<T>
    ? U extends true
      ? `-${Lowercase<T>}`
      : Lowercase<T>
    : T
  : T;

type KebabCase<S extends string, U extends boolean = false> = S extends `${infer Head}${infer Tail}`
  ? `${TransformUpperCase<Head, U>}${KebabCase<Tail, true>}`
  : S;

type TestKebabCase = KebabCase<'FooBarZ'>;
