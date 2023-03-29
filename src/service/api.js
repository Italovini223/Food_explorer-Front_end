import axios from 'axios';

export const api = axios.create({
  baseURL: "https://food-explorer-api-c912.onrender.com"
})