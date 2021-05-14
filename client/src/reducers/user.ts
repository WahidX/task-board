import { Action } from "redux";
import { UserStore } from "../@types/Stores";

const initialState: UserStore = {
	loading: false,
	isLoggedin: false,
	error: "",
};

export default function user(state = initialState, action: Action) {
	switch (action.type) {
		default:
			return state;
	}
}
