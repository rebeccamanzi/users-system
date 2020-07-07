// config axios

import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://gorest.co.in/public-api/'
});