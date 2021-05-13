import { Action } from "redux";
interface AppStore {
	local: Boolean;
	mode: AppMode;
	currentItem: unknown | NoteBook | TaskBoard; // have to check
	error: String;
	loading: Boolean;
	config: Object;
}

enum AppMode {
	notebook = "notebook",
	taskboard = "taskboard",
}

const initialState: AppStore = {
	local: true,
	mode: AppMode.notebook,
	currentItem: null,
	loading: false,
	error: "",
	config: {},
};

export default function app(state = initialState, action: Action) {
	switch (action.type) {
		default:
			return state;
	}
}
