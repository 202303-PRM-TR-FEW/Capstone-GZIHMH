// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import db from "@/utils/db";

const savedCourses = db.courses.filter((course) => course.saved);

const initialState = savedCourses; // Use the array directly as initialState

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload); // Modify the array directly, no need for a "courses" property
    },
  },
});

export const { addToCart } = coursesSlice.actions;
export default coursesSlice.reducer;
