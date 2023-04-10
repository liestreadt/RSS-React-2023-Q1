import { expect, test } from 'vitest';
import { LocationNames } from './types';
import { getCurrentLocationName } from './helperFunctions';

test('should return correct location', () => {
  expect(getCurrentLocationName('/')).toBe(LocationNames.Main);
  expect(getCurrentLocationName('/about')).toBe(LocationNames.About);
  expect(getCurrentLocationName('/forms')).toBe(LocationNames.Forms);
  expect(getCurrentLocationName('/asd')).toBe(LocationNames.NotFound);
});
