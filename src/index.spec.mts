import { it } from 'node:test';

import { expect } from 'expect';
import { hello } from './index';

await it('helloTest', () => {
  expect(hello()).toEqual('Hello world');
});

await it('equal', () => {
  expect(1 + 2).toEqual(3);
});
