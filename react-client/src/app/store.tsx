import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../theme/themeSlice'
import bookingsDateListReducer from '../features/bookingList/slice/bookingListSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    bookingsDateList: bookingsDateListReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store