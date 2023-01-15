import { expect } from 'expect';

import { hello } from './index.js';

export function helloTest() {
  expect(hello()).toEqual('Hello world');
}

export function equal() {
  expect(1 + 2).toEqual(3);
}
