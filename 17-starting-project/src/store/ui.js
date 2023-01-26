import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { show: true, notification: null },
  reducers: {
    toggle: (state) => {
      state.show = !state.show;
    },
    setNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
