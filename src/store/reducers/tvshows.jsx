import { createSlice } from '@reduxjs/toolkit'

export const tvSlice = createSlice({
  name: 'tvShows',
  initialState: {
    info: null
  },
  reducers: {
      loadtv :(state, action)=>{
        state.info = action.payload;
      },
      removetv : (state)=>{
        state.info =  null;
      }
  }
})

export const { loadtv,removetv } = tvSlice.actions

export default tvSlice.reducer