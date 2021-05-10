import { combineReducers } from "redux";

// reducers
import user from "./user";
import app from "./app";
// import snackbar from './snackbar';

export default combineReducers({
	app,
	user,
});
