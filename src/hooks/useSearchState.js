import { useState, useEffect, createContext } from 'react';
import { stateService } from '../services/state';
import { searchStates, getState } from '../utils/state';

export const SearchStateContext = createContext(null);

export const useSearchState = () => {
  const [states, setStates] = useState([]);
  const [query, setQuery] = useState('');
  const [resultsList, setResultsList] = useState([]);
  const [pickedStateCode, setPickedStateCode] = useState(null);
  const [searchKey, setSearchKey] = useState('state');
  const [dataType, setDataType] = useState('table');
  const currentState = getState(pickedStateCode, states);

  useEffect(() => {
    stateService.fetchAllStates().then(({ data }) => {
      setStates(data);
    })
  }, []);

  useEffect(() => {
    setResultsList(searchStates(query, searchKey, states));

    if (currentState && currentState.state !== query) {
      setPickedStateCode(null);
    }
  }, [query]);

  useEffect(() => {
    if (currentState) {
      setQuery(currentState.state);
    }
  }, [pickedStateCode]);

  return {
    query,
    onSetQuery: setQuery,
    list: resultsList,
    onPick: ({ code }) => setPickedStateCode(code),
    currentState,
    dataType,
    setSearchKey,
    setDataType,
  };
}