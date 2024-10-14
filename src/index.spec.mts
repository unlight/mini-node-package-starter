import { describe, it, mock, Mock } from 'node:test';

import { expect } from 'expect';
import { hello, ParkService } from './index';
import { StubbedInstanceCreator } from 'ts-stubber';

it('helloTest', () => {
  expect(hello()).toEqual('Hello world');
});

it('equal', () => {
  expect(1 + 2).toEqual(3);
});

it('mock', () => {
  const creator = StubbedInstanceCreator<ParkService, Mock<Function>>(() =>
    mock.fn(),
  );

  const mockParkService = creator.createStubbedInstance();

  mockParkService.welcome.mock.mockImplementation(() => 'mocked');

  const result = mockParkService.welcome();

  expect(result).toBe('mocked');
});
