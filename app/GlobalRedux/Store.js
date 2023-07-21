"use client";
import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Features/counter/counterSlice";

const store = configureStore({
  reducer: {
    allCourses: coursesReducer,
  },
});
export default store;
