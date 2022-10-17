import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    name: "",
    country: "",
    email: "",
    favColor: "",
  },
  reducers: {
    addName: (state, action) => {
      state.name = action.payload;
    },
    addCountry: (state, action) => {
      state.country = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addFavColor: (state, action) => {
      state.favColor = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;

export const { addName, addCountry, addEmail, addFavColor } = rootSlice.actions;
