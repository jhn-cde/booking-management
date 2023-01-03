import { api } from "../../../api/api";

export const fetchTours = (setTours: (value: React.SetStateAction<any[] | undefined>) => void) => {
  api.get<any[]>('/tours')
  .then(response => {
    if(response.status === 200){
      const data = response.data.map(option => {return {label: option.name, value: option._id}})

      setTours(data)
    }
  })
  .catch(err => {
    console.log('Error!!', err)
  })
}