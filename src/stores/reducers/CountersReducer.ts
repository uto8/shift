import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0,
};

const countersSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state: { value: number; }) => {
      state.value += 1;
    },
    decrement: (state: { value: number; }) => {
      state.value -= 1;
    },
    setValue: (state: { value: any; }, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = countersSlice.actions;
export const countersReducer = countersSlice.reducer;
