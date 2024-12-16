import axios from 'axios';
import store from '../store';

const BASE_URL = 'http://localhost:5000/api'; 

export const api = axios.create({
  baseURL: BASE_URL,
});


api.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth?.token;

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});
