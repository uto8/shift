import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {PostsData} from '../stores/DammyData';

export const postSlice = createSlice({
  name: "posts",
  initialState: { value: PostsData },
  reducers: {
    addPost: (state: { value: any[]; }, action: { payload: any; }) => {
      state.value.push(action.payload)
    },
    deletePost: (state: { value: any[]; }, action: { payload: number; }) => {
      console.log(action.payload)
      state.value.splice(action.payload, action.payload);
    }
  }
})

export default postSlice.reducer;
export const {addPost ,deletePost} = postSlice.actions;
