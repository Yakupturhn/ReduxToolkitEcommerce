import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const SearhFilter = createSlice({
  name: "Search",
  initialState,

  reducers: {
    searchItem: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { searchItem } = SearhFilter.actions;

export default SearhFilter.reducer;
