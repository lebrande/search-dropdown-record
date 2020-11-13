import React from 'react';

const StatePage = ({
  onBack,
  state: {
    state,
    nickname,
    admission_date,
    capital_city,
    code,
    population,
    population_rank,
    map_image_url,
    state_flag_url,
    state_seal_url,
  },
}) => {
  return (
    <div className="StatePage content">
      <button
        className="button"
        onClick={onBack}
      >
        Wróć do wyszukiwania
      </button>
      <h1 className="title is-1">{state}</h1>
      <p className="title is-3">{nickname}</p>

      <div className="Symbols">
        <div className="ImageWrapper">
          <img className="Flag" src={state_flag_url} />
        </div>
        <div className="ImageWrapper">
          <img src={state_seal_url} />
        </div>
      </div>

      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <tbody>
          <tr>
            <td>Data przyłączenia</td>
            <td>{admission_date}</td>
          </tr>
          <tr>
            <td>Stolica</td>
            <td>{capital_city}</td>
          </tr>
          <tr>
            <td>Kod</td>
            <td>{code}</td>
          </tr>
          <tr>
            <td>Mieszkańcy</td>
            <td>{population}</td>
          </tr>
          <tr>
            <td>Ranking mieszkańców</td>
            <td>{population_rank}</td>
          </tr>
        </tbody>
      </table>

      <img className="Map" src={map_image_url} />
    </div>
  );
};

export default StatePage;
