import { createSlice } from '@reduxjs/toolkit'
import { get } from '../../../api/api'
import { RootState } from '../../../app/store'
import { BookingInterface } from '../../../ts/interfaces'

// Define a type for the slice state

export interface BookingDateListInterface{
  _id: {year: number, month: number} ,
  bookings: BookingInterface[]
}

interface BookingListState {
  bookings: BookingDateListInterface[]
}

// Define the initial state using that type
const initialState: BookingListState = {
  bookings: []
}

export const bookingListSlice = createSlice({
  name: 'bookings',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    fillBookingsDateList: (state, action) => {
      state.bookings = action.payload.bookings
    }
  },
})

export const { fillBookingsDateList } = bookingListSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectBookingsList = (state: RootState) => state.bookingsDateList.bookings

export default bookingListSlice.reducer

export const updateBookingsList = () => {
  return async (dispatch: <AnyAction>(action: AnyAction) => AnyAction) => {
    try {
      const _bookings = await get('bookings', 'groupdate');
      dispatch(fillBookingsDateList({bookings: _bookings}));
    } catch (error) {
      console.log(error)
    }
  }
}