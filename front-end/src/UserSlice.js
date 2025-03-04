import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  position: "",
  name: "",
  dept: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.position = action.payload.position;
      state.name = action.payload.name;
      state.dept = action.payload.dept;
    },
    logout: (state) => {
      state.position = "";
      state.name = "";
      state.dept = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;