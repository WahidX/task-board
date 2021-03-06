import { AnyAction } from "redux";
import { AppStore } from "../@types/Stores";
import { DELETE_ITEM, UPDATE_CURRENT_ITEM, UPDATE_CURRENT_ITEM_NAME } from "../actions/actionTypes";

export enum AppMode {
	notebook = "notebook",
	taskboard = "taskboard",
}

const initialState: AppStore = {
	local: true,
	mode: AppMode.notebook,
	currentItem: undefined,
	loading: false,
	error: "",
	config: {},
};

export default function app(state = initialState, action: AnyAction): AppStore {
	switch (action.type) {
		case UPDATE_CURRENT_ITEM:
			return {
				...state,
				mode: action.mode,
				currentItem: action.item.id,
			};

		case DELETE_ITEM:
			return {
				...state,
				currentItem: undefined,
			};

		default:
			return state;
	}
}
