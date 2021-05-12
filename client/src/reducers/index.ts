import { combineReducers } from "redux";

// reducers
import user from "./user";
import app from "./app";
import items from "./items";
// import snackbar from './snackbar';

export default combineReducers({
	app,
	user,
	items,
});
