import { api, get } from "./api";

export const getTour = (
    tour_id: String, 
    f: any
  ) => {
  get('tours', tour_id, f)
}