import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import data from '../assets/data/restaurants.json'
import { AppState } from './store'

export interface Restaurant {
  id: string
  name: string
  image: string
  url: string
  price: number
  tags: string[]
}

export interface RestaurantState {
  restaurants: Restaurant[]
  location: string
  isLoading: boolean
  hasErrors: boolean
}

const initialState: RestaurantState = {
  restaurants: [],
  location: '',
  isLoading: false,
  hasErrors: false,
}

export const fetchRestaurants = createAsyncThunk('restaurants/fetchRestaurants', async () => {
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
  try {
    // to mock the api time
    // await delay(600)
    return data
  } catch (error) {
    throw Error(error)
  }
})

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchRestaurants.fulfilled, (state, actions) => {
        state.isLoading = false
        state.restaurants = actions.payload.restaurants
        state.location = actions.payload.neighborhood
      })
      .addCase(fetchRestaurants.rejected, (state) => {
        state.isLoading = false
        state.hasErrors = true
      })
  },
})

export const selectRestaurants = (state: AppState) => state.restaurants

export default restaurantsSlice.reducer
