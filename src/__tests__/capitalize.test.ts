import { capitalize } from '../index';

test('Capitalize', () => {
  expect(capitalize('john')).toBe('John');

  expect(capitalize('john doe')).toBe('John doe');
});
