import axios from 'axios'
import { AppbarContent } from 'react-native-paper/lib/typescript/components/Appbar/AppbarContent';

export const api = axios.create({
  baseURL: "http://192.168.1.37:3000/api/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const get = async (
  route: String,
  _id: String
  ) => {
    try {
      const response = await api.get<any>(`/${route}/${_id}`);
      return response.data
    } catch (error) {
      console.log('Error get!!', error)
    }
}

export const getall = async (
  route: String
) => {
  try {
    const response = await api.get<any>(`/${route}`);
    return response.data
  } catch (error) {
    console.log('Error getall!!', error)
  }
}

export const post = async (
  route: String,
  toPost: any
) => {
  try {
    const response = await api.post(`/${route}`, toPost);
    return response.data
  } catch (error) {
    console.log('Error post', error)
  }
}