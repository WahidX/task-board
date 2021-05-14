import { Action } from "redux";
import { AppStore } from "../@types/Stores";
import { UPDATE_CURRENT_ITEM } from "../actions/actionTypes";

export enum AppMode {
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
		case UPDATE_CURRENT_ITEM:
			return {
				...state,
				mode: action.mode,
				currentItem: action.item,
			};
		default:
			return state;
	}
}
