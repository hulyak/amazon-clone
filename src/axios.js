import axios from 'axios';

const instance = axios.create({
  baseURL: '', // the API (cloud function) Url
});

export default instance;
