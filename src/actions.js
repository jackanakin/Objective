import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE } from './constants';
import axios from 'axios'
import { API_URL } from 'react-native-dotenv'

export function fetchPeopleFromAPI() {
  return (dispatch) => {
    dispatch(getPeople())

    axios.get(`${API_URL}peoples/`)
      .then(function (response) {
        console.warn(response)
        return response.json();
      })
      .then(function (response) {
        console.warn("2: " + response)
        dispatch(getPeopleSuccess(json.results))
      })
      .catch((error) => {
        // Error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.warn('reqerror: ', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.warn('Error', error.message);
        }
        console.warn('Config: ', error.config);
      });
  }
}

export function getPeople() {
  return {
    type: FETCHING_PEOPLE
  }
}

export function getPeopleSuccess(data) {
  return {
    type: FETCHING_PEOPLE_SUCCESS,
    data,
  }
}

export function getPeopleFailure() {
  return {
    type: FETCHING_PEOPLE_FAILURE
  }
}