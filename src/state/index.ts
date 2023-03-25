import {configureStore} from "@reduxjs/toolkit";
import menuReducer from "./menu/index"

const state = configureStore({
	reducer: {
		menuReducer
	}
})

export default state;