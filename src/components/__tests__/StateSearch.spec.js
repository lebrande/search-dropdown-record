import React from 'react';
import renderer from 'react-test-renderer';
import StateSearch from '../StateSearch';
import { SearchStateContext } from '../../hooks/useSearchState';

describe('StateSearch', () => {
  it('default render matches snapshot', () => {
    const tree = renderer
      .create((
        <SearchStateContext.Provider value={{
          query: "",
          onSetQuery: jest.fn(),
          list: [],
          onPick: jest.fn(),
        }}>
          <StateSearch />
        </SearchStateContext.Provider>
      ))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
