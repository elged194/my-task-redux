import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showFirstName: "",
  showLastName: "",
  showPhoneNumber: "",
};


export const counterSlice = createSlice({
  
  name: "counter",
  initialState,
  reducers: {
    changeFirName: (state, action) => {
      state.showFirstName = action.payload;
    },
    changeLasName: (state, action) => {
      state.showLastName = action.payload;
    },
    changePhoNumber: (state, action) => {
      state.showPhoneNumber = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeFirName ,changeLasName , changePhoNumber } = counterSlice.actions;

export default counterSlice.reducer;
