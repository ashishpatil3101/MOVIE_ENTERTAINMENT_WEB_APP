import { configureStore } from '@reduxjs/toolkit'
import tvshowsReducer from './reducers/tvshows'
import movieReducer from './reducers/movieSlice'
import personReducer from './reducers/personSlice'

export default configureStore({
  reducer: {
    tvshows: tvshowsReducer,
    movies : movieReducer,
    person : personReducer
  }
})