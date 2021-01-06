import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('dropdown list - show on click input and hide on select', () => {
    const testList = [
      { state: 'state1' },
      { state: 'state2' },
      { state: 'state3' },
    ];

    render((
      <SearchStateContext.Provider value={{
        query: "",
        onSetQuery: jest.fn(),
        list: testList,
        onPick: jest.fn(),
      }}>
        <StateSearch />
      </SearchStateContext.Provider>
    ))

    // check there is no dropdown list rendered
    const menuBefore = screen.queryAllByTestId('dropdown-menu');
    expect(menuBefore.length).toBe(0);

    // click input
    const input = screen.queryByTestId('input');
    userEvent.click(input);

    // dropdown appears
    const menuAfterClickInput = screen.queryAllByTestId('dropdown-menu');
    expect(menuAfterClickInput.length).toBe(1);

    // check items count
    const items = screen.queryAllByTestId('dropdown-item');
    expect(items.length).toBe(testList.length);

    // check state name is displayed
    expect(items[0].textContent).toBe(testList[0].state);

    // menu disappears when click (select) an item
    userEvent.click(items[0]);
    const menuAfterClickItem = screen.queryAllByTestId('dropdown-menu');
    expect(menuAfterClickItem.length).toBe(0);
  });
});
