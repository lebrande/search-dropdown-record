import React, { useState, useEffect } from 'react';
import StatePage from './StatePage';
import StateSearch from './StateSearch';
import { searchStates, getState } from '../services/state';
import Select from './Select';

const App = () => {
  const [query, setQuery] = useState('');
  const [resultsList, setResultsList] = useState([]);
  const [pickedStateCode, setPickedStateCode] = useState(null);
  const [searchKey, setSearchKey] = useState('state');
  const [dataType, setDataType] = useState('table');
  const currentState = getState(pickedStateCode);

  useEffect(() => {
    setResultsList(searchStates(query, searchKey));
  }, [query]);

  return (
    <div className="App">
      <Select
        label="Wyszukuj po"
        onSelect={setSearchKey}
        value={searchKey}
      >
        <option value="state">nazwa</option>
        <option value="code">kod stanu</option>
        <option value="capital_city">stolica</option>
      </Select>
      <StateSearch
        query={query}
        onSetQuery={setQuery}
        list={resultsList}
        onPick={({ code }) => setPickedStateCode(code)}
      />
      <Select
        label="Pokaż dane"
        onSelect={setDataType}
        value={dataType}
      >
        <option value="table">tabela</option>
        <option value="symbols">symbole</option>
        <option value="map">mapa</option>
      </Select>
      {currentState && (
        <StatePage 
          state={currentState}
          dataType={dataType}
        />
      )}
    </div>
  );
};

export default App;
