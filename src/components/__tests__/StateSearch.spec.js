import React from 'react';
import StateSearch from '../StateSearch';
import renderer from 'react-test-renderer';
import { SearchStateContext } from '../../hooks/useSearchState';

describe('StateSearch', () => {
  it('Match to snapshot', () => {
    const tree = renderer.create((
      <SearchStateContext.Provider value={{
        query: "test query",
        onSetQuery: jest.fn(),
        list: [],
        onPick: jest.fn(),
      }}>u
        <StateSearch />
      </SearchStateContext.Provider>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
})