import { getState, searchStates } from '../state';

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
  it('returns whole state from the list based on the code', () => {
    expect(getState('AL', testStates)).toEqual({
      code: 'AL',
      state: 'Alabama',
    });
  });

  it('returns undefined when no state within the list', () => {
    expect(getState('CA', testStates)).toEqual(undefined);
  });
});

describe('searchStates', () => {
  it('returns Alabama, Arizona items for query: al, key: state', () => {
    expect(searchStates('al', 'state', testStates)).toEqual([
      {
        code: 'AL',
        state: "Alabama",
      },
      {
        state: "Alaska",
        code: "AK",
      },
    ]);
  });

  it(`returns empty list for query: '', key: state`, () => {
    expect(searchStates('', 'state', testStates)).toEqual([]);
  });
});