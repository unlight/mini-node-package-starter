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

  const mockParkService = creator.createStubbedInstance({});

  // console.log('mockParkService.welcome', mockParkService.welcome);

  mockParkService.welcome.mock.mockImplementation(() => 'mocked');

  const result = mockParkService.welcome();

  // const a = mockParkService.welcome.mock.callCount();
  expect(mockParkService.welcome.mock.callCount()).toEqual(1);
});
