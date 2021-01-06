import { getSelectedItemOnKey } from '../getSelectedItemOnKey';

describe('getSelectedItemOnKey', () => {
  it('returns 0 when ArrowUp, selected: 1', () => {
    expect(getSelectedItemOnKey('ArrowUp', 1)).toBe(0);
  });

  it('returns 1 when ArrowUp, selected: 2', () => {
    expect(getSelectedItemOnKey('ArrowUp', 2)).toBe(1);
  });

  it('returns 0 when ArrowUp, selected: 0', () => {
    expect(getSelectedItemOnKey('ArrowUp', 0)).toBe(0);
  });

  it('returns 5 when ArrowDown, selected: 4', () => {
    expect(getSelectedItemOnKey('ArrowDown', 4)).toBe(5);
  });

  it('returns 9 when ArrowDown, selected: 9, listLength: 10', () => {
    expect(getSelectedItemOnKey('ArrowDown', 9, 10)).toBe(9);
  });
})