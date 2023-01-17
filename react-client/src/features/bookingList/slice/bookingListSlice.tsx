import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../../api/api'
import { RootState } from '../../../app/store'
import { BookingInterface } from '../../../ts/interfaces'

// Define a type for the slice state
export interface BookingDateListInterface{
  _id: {year: number, month: number} ,
  bookings: BookingInterface[]
}

interface BookingListState {
  bookings: BookingDateListInterface[],
  status: 'idle' | 'loading' | 'succeeded'  | 'failed',
  error: any | null
}

// Define the initial state using that type
const initialState: BookingListState = {
  bookings: [],
  error: null,
  status: 'idle',
}

export const fetchBookingsList = createAsyncThunk('bookings/fetchBookingsList', async () => {
  const response = await api.get<any>(`/bookings/groupdate`);
  return response.data
})

export const bookingListSlice = createSlice({
  name: 'bookings',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  },
  extraReducers(builder){
    builder
      .addCase(fetchBookingsList.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchBookingsList.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.bookings = action.payload
      })
      .addCase(fetchBookingsList.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

// Other code such as selectors can use the imported `RootState` type
export const selectBookingsList = (state: RootState) => state.bookingsDateList.bookings
export const selectBookingById = (state: RootState, bookingId: String) => {
  const all_bookings = 
  state.bookingsDateList.bookings.map(bookings => [...bookings.bookings])
  console.log(all_bookings)
  return 'Hii'
}

export default bookingListSlice.reducer
