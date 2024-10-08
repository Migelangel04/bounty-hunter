import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	username: "",
};

const userNameSlice = createSlice({
	name: "Username",
	initialState: initialState,
	reducers: {
		setUsername: (state, action) => {
			state.username = action.payload;
		},
		resetUsername: () => initialState,
	},
});

export const { setUsername, resetUsername } = userNameSlice.actions;
export default userNameSlice.reducer;
