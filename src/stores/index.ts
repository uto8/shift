"use client"
import { configureStore } from "@reduxjs/toolkit";
import { countersReducer } from "./reducers/CountersReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import postsReducer from '../features/Post';

export const store = configureStore({
  reducer: {
    counters: countersReducer,
    posts: postsReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
