/* eslint-disable @typescript-eslint/naming-convention */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  Length<5>,
  Length<'hello world'>
];

// ============= Your Code Here =============
type Length<T> = T extends readonly any[] ? T['length'] : never;

type teslaLength = Length<typeof tesla>;
