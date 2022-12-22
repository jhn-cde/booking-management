import axios from 'axios'

export const api = axios.create({
  baseURL: "http://192.168.1.37:3000/api/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});