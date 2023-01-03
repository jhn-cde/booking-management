import { api } from "../../../api/api";
import { toursI } from "../components/ManageTours";

export const fetchTours = (setTours: (value: React.SetStateAction<any[] | undefined>) => void) => {
  api.get<toursI[]>('/tours')
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