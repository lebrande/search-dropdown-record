import { getState } from '../state';

const testStates = [
  {
    state: 'Alabama',
    code: 'AL',
  },
  {
    state: 'Alaska',
    code: 'AK',
  },
  {
    state: 'Arizona',
    code: 'AZ',
  },
];

describe('getState', () => {
  it('returns Alaska for AK', () => {
    expect(getState('AK', testStates)).toEqual({
      state: 'Alaska',
      code: 'AK',
    })
  });

  it('returns undefined for empty string', () => {
    expect(getState('', testStates)).toEqual(undefined)
  });
})