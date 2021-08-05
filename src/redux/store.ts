import { configureStore } from '@reduxjs/toolkit'
import restaurantsReducer, { RestaurantState } from './restaurantsSlice'
// import usersReducer, { UserState } from './usersSlice'

export interface AppState {
  restaurants: RestaurantState
  user: { [name: string]: string }
}

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    // user: usersReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
