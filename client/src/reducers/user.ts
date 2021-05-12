import { Action } from "redux";

interface UserStore {
	profile?: User;
	error: String;
	isLoggedin: Boolean;
	loading: Boolean;
}

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
