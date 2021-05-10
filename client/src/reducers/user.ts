interface UserStore {
	profile: Object;
	error: String;
	isLoggedin: Boolean;
	loading: Boolean;
}

const initialState: UserStore = {
	profile: {},
	loading: false,
	isLoggedin: false,
	error: "",
};

export default function user(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
