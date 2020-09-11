import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-ch-71634.cloudfunctions.net/api', // change with `firebase deploy --only functions` url
});

export default instance;

// http://localhost:5001/ch-71634/us-central1/api, // the API (cloud function) Url
