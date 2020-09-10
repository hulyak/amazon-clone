import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/ch-71634/us-central1/api', // the API (cloud function) Url
});

export default instance;
