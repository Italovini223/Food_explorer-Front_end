import axios from 'axios';

export const api = axios.create({
  baseURL: "https://my-food-explorer-api.onrender.com"
})