import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './formSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})