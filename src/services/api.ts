import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
     Authorization: `Bearer ${process.env.API_KEY}`
  }
});