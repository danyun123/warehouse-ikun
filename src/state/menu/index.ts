import {createSlice} from "@reduxjs/toolkit";

const menu = createSlice({
	name: "menu",
	initialState: {
		submenuOnClick: false
	},
	reducers: {
		alterSubmenuOnClick(state,{payload}) {
			state.submenuOnClick = payload
		}
	}
})

export const {alterSubmenuOnClick} = menu.actions;
export default menu.reducer;