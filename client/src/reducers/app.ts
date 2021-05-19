import { AnyAction } from "redux";
import { AppStore } from "../@types/Stores";
import { ADD_CARD_SUCCESS, UPDATE_CURRENT_ITEM } from "../actions/actionTypes";

export enum AppMode {
	notebook = "notebook",
	taskboard = "taskboard",
}

const initialState: AppStore = {
	local: true,
	mode: AppMode.notebook,
	// currentItem: null,
	loading: false,
	error: "",
	config: {},
};

export default function app(state = initialState, action: AnyAction) {
	switch (action.type) {
		case UPDATE_CURRENT_ITEM:
			return {
				...state,
				mode: action.mode,
				currentItem: action.item,
			};

		case ADD_CARD_SUCCESS:
			let updatedCurrentItem = state.currentItem;
			console.log("before: ", updatedCurrentItem);
			if (!updatedCurrentItem) return state;

			if (state.mode === AppMode.notebook) {
				// @ts-ignore
				updatedCurrentItem.cards.push(action.card);
			} else {
				// @ts-ignore
				if (updatedCurrentItem.columns[action.columnIndex])
					// @ts-ignore
					updatedCurrentItem.columns[action.columnIndex].cards.push(action.card);
				console.log(updatedCurrentItem);
			}

			return {
				...state,
				currentItem: updatedCurrentItem,
			};

		default:
			return state;
	}
}
