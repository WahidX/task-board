import { Action } from "redux";
import { Card } from "../@types/Card";
import { ItemStore } from "../@types/Stores";

import {
	START_ITEM_LOADING,
	ITEM_ERROR,
	ADD_NOTEBOOK_SUCCESS,
	EDIT_NOTEBOOK_SUCCESS,
	DELETE_NOTEBOOK_SUCCESS,
	ADD_CARD_SUCCESS,
	ADD_TASKBOARD_SUCCESS,
} from "../actions/actionTypes";

const initialState: ItemStore = {
	notebooks: {},
	taskboards: {},
	loading: false,
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

		case ADD_CARD_SUCCESS:
			// As of now for notebook cards
			let cards: Card[] = state.notebooks[action.card.notebookid].cards;
			cards = [...cards, action.card];
			return {
				...state,
				notebooks: {
					...state.notebooks,
					[action.card.notebookid]: {
						...state.notebooks[action.card.notebook],
						cards,
					},
				},
				loading: false,
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
		default:
			return state;
	}
}
