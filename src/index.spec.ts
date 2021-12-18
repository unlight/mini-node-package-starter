import expect from 'expect';

import * as library from './index.js';

export function smoke() {
    expect(library).toEqual(expect.anything());
}

export function helloTest() {
    expect(library.hello()).toEqual('Hello world');
}
