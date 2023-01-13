import React, { Dispatch, SetStateAction } from "react";
import { api } from "../../../api/api";
import { TourInterface } from "../../../ts/interfaces/tour.interface";

export const getTour = (
    tour_id: String, 
    setTour: Dispatch<SetStateAction<TourInterface | undefined>>) => {
  api.get<any>(`/tours/${tour_id}`)
  .then(response => {
      if(response.status === 200){
          setTour(response.data)
        }
  })
  .catch(err => {
    console.log('Error!!', err)
  })
}