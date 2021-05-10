interface AppStore {
	local: Boolean;
	error: String;
	loading: Boolean;
	config: Object;
}

const initialState: AppStore = {
	local: true,
	loading: false,
	error: "",
	config: {},
};

export default function app(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
