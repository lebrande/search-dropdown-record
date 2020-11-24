import React from 'react';
import StateSearch from './StateSearch';

const App = () => {
  return (
    <div className="App">
      <div className="field">
        <label className="label">Wyszukuj po</label>
        <div className="control">
          <div className="select">
            <select>
              <option>nazwa</option>
              <option>kod stanu</option>
              <option>stolica</option>
            </select>
          </div>
        </div>
      </div>
      <StateSearch />
      <div className="field">
        <label className="label">Pokaż dane</label>
        <div className="control">
          <div className="select">
            <select>
              <option>tabela</option>
              <option>symbole</option>
              <option>mapa</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
