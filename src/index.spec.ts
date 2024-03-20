import { it } from 'node:test';

import { expect } from 'expect';
import { hello } from './index';

it('helloTest', () => {
  expect(hello()).toEqual('Hello world'); // 1
});

it('equal', () => {
  expect(1 + 2).toEqual(3);
});
