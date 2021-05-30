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
	DELETE_COLUMN,
	UPDATE_COLUMNS,
	ADD_COLUMN,
	UPDATE_CARD,
	ADD_CARD_SUCCESS,
	UPDATE_CARDS,
	CLEAR_CARDS,
} from "../actions/actionTypes";
import { AppMode } from "./app";

const initialState: ItemStore = {
	notebooks: {},
	taskboards: {},
	loading: false,
	error: "",
};

/*
	:: Order ::
	Genarals:
	Notebook specific
	Taskboard specific
	*/

export default function items(state: ItemStore = initialState, action: Action | any): ItemStore {
	switch (action.type) {
		// Generals
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

		// Notebook specific
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

		case ADD_COLUMN:
			return {
				...state,
				taskboards: {
					...state.taskboards,
					[action.taskboardID]: {
						...state.taskboards[action.taskboardID],
						columns: [...state.taskboards[action.taskboardID].columns, action.newColumn],
					},
				},
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

		case DELETE_COLUMN:
			return {
				...state,
				taskboards: {
					...state.taskboards,
					[action.taskboardID]: {
						...state.taskboards[action.taskboardID],
						columns: [
							...state.taskboards[action.taskboardID].columns.slice(0, action.columnIndex),
							...state.taskboards[action.taskboardID].columns.slice(action.columnIndex + 1),
						],
					},
				},
			};

		case UPDATE_COLUMNS:
			var changedTaskboard: TaskBoard = state.taskboards[action.taskboardID];
			changedTaskboard.columns = action.columns;

			return {
				...state,
				taskboards: {
					...state.taskboards,
					[action.taskboardID]: changedTaskboard,
				},
			};

		case ADD_CARD_SUCCESS:
			if (action.columnIndex !== undefined)
				return {
					...state,
					taskboards: {
						...state.taskboards,
						[action.itemID]: {
							...state.taskboards[action.itemID],
							columns: state.taskboards[action.itemID].columns.map((column, index) => {
								if (index === action.columnIndex) {
									return {
										...column,
										cards: [action.card, ...column.cards],
									};
								} else return column;
							}),
						},
					},
				};
			else
				return {
					...state,
					notebooks: {
						...state.notebooks,
						[action.itemID]: {
							...state.notebooks[action.itemID],
							cards: [action.card, ...state.notebooks[action.itemID].cards],
						},
					},
				};

		case UPDATE_CARD:
			if (action.mode === AppMode.taskboard)
				return {
					...state,
					taskboards: {
						...state.taskboards,
						[action.itemID]: {
							...state.taskboards[action.itemID],
							columns: state.taskboards[action.itemID].columns.map((column, index) => {
								if (index === action.card.parent) {
									let newCards = column.cards;
									newCards[action.index] = action.card;
									return {
										...column,
										cards: newCards,
									};
								} else return column;
							}),
						},
					},
				};
			else
				return {
					...state,
					notebooks: {
						...state.notebooks,
						[action.itemID]: {
							...state.notebooks[action.itemID],
							cards: state.notebooks[action.itemID].cards.map((card, index) => {
								if (index === action.index) return action.card;
								else return card;
							}),
						},
					},
				};

		case UPDATE_CARDS: // Card reordering
			return {
				...state,
				taskboards: {
					...state.taskboards,
					[action.taskboardID]: {
						...state.taskboards[action.taskboardID],
						columns: state.taskboards[action.taskboardID].columns.map((column, index) => {
							if (index === action.columnIndex) {
								return {
									...column,
									cards: action.cards,
								};
							} else return column;
						}),
					},
				},
			};

		case CLEAR_CARDS:
			return {
				...state,
				taskboards: {
					...state.taskboards,
					[action.taskboardID]: {
						...state.taskboards[action.taskboardID],
						columns: state.taskboards[action.taskboardID].columns.map((column, index) => {
							if (index === action.columnIndex)
								return {
									...column,
									cards: [],
								};
							else return column;
						}),
					},
				},
			};

		default:
			return state;
	}
}
