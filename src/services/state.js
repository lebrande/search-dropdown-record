import Axios from 'axios';

export const stateService = {
  fetchAllStates: () => {
    return Axios('http://localhost:4000/states');
  }
};