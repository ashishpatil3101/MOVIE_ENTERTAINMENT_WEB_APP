import { createSlice } from '@reduxjs/toolkit'

export const tvShowsSlice = createSlice({
  name: 'tvShows',
  initialState: {
    info: null
  },
  reducers: {
      loadtvShows :(state, action)=>{
        state.info = action.payload;
      },
      removetvShows : (state)=>{
        state.info =  null;
      }
  }
})

export const { loadtvShows,removetvShows } = tvShowsSlice.actions

export default tvShowsSlice.reducer