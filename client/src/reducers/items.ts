import { Action } from "redux";
import { ItemStore } from "../@types/Stores";
import { TaskBoard } from "../@types/TaskBoard";

import {
	START_ITEM_LOADING,
	ITEM_ERROR,
	ADD_NOTEBOOK_SUCCESS,
	EDIT_NOTEBOOK_SUCCESS,
	DELETE_NOTEBOOK_SUCCESS,
	ADD_TASKBOARD_SUCCESS,
	EDIT_COLUMN,
} from "../actions/actionTypes";

const initialState: ItemStore = {
	notebooks: {},
	taskboards: {},
	loading: false,
	error: "",
};

export default function items(state: ItemStore = initialState, action: Action | any): ItemStore {
	switch (action.type) {
		case START_ITEM_LOADING:
			return {
				...state,
				loading: true,
			};

		case ITEM_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};

		case ADD_NOTEBOOK_SUCCESS:
			return {
				...state,
				notebooks: {
					...state.notebooks,
					[action.notebook.id]: action.notebook,
				},
				loading: false,
			};

		case EDIT_NOTEBOOK_SUCCESS:
			return {
				...state,
				notebooks: {
					...state.notebooks,
					[action.notebook.id]: action.notebook,
				},
				loading: false,
			};

		case DELETE_NOTEBOOK_SUCCESS:
			let { [action.id]: valueToBeDeleted, ...restNotebooks } = state.notebooks;
			return {
				...state,
				notebooks: {
					...restNotebooks,
				},
			};

		case ADD_TASKBOARD_SUCCESS:
			return {
				...state,
				taskboards: {
					...state.taskboards,
					[action.taskboard.id]: action.taskboard,
				},
				loading: false,
			};

		case EDIT_COLUMN:
			var changedTaskboard: TaskBoard = state.taskboards[action.taskboardID];
			changedTaskboard.columns[action.columnIndex].name = action.name;
			return {
				...state,
				taskboards: {
					...state.taskboards,
					[action.taskboardID]: changedTaskboard,
				},
			};

		default:
			return state;
	}
}
