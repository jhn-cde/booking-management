import axios from 'axios'

export const api = axios.create({
  baseURL: "http://192.168.1.37:3000/api/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const get = (
  route: String,
  _id: String,
  f: any
) => {
api.get<any>(`/${route}/${_id}`)
.then(response => {
  if(response.status === 200){
    f(response.data)
  }
})
.catch(err => {
  console.log('Error get!!', err)
})
}