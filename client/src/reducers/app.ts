import { AnyAction } from "redux";
import { AppStore } from "../@types/Stores";
import { UPDATE_CURRENT_ITEM, UPDATE_CURRENT_ITEM_NAME } from "../actions/actionTypes";

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

export default function app(state = initialState, action: AnyAction) {
	switch (action.type) {
		case UPDATE_CURRENT_ITEM:
			return {
				...state,
				mode: action.mode,
				currentItem: action.item.id,
			};

		case UPDATE_CURRENT_ITEM_NAME:
			return {
				...state,
				currentItem: {
					// @ts-ignore
					...state.currentItem,
					name: action.name,
				},
			};
		// case ADD_CARD_SUCCESS:
		// 	let updatedCurrentItem = state.currentItem;
		// 	if (!updatedCurrentItem) return state;

		// 	if (state.mode === AppMode.notebook) {
		// 		// @ts-ignore
		// 		updatedCurrentItem.cards.push(action.card);
		// 	} else {
		// 		// @ts-ignore
		// 		if (updatedCurrentItem.columns[action.columnIndex])
		// 			// @ts-ignore
		// 			updatedCurrentItem.columns[action.columnIndex].cards.push(action.card);
		// 	}

		// 	return {
		// 		...state,
		// 		currentItem: updatedCurrentItem,
		// 	};

		// case UPDATE_CARDS:
		// 	// @ts-ignore
		// 	var changedColumns: Column[] = state.currentItem.columns;
		// 	changedColumns[action.columnIndex].cards = action.cards;

		// 	return {
		// 		...state,
		// 		currentItem: {
		// 			...state.currentItem,
		// 			columns: changedColumns,
		// 		},
		// 	};

		// case DELETE_COLUMN:
		// 	// @ts-ignore
		// 	var changedColumns: Column[] = state.currentItem.columns;
		// 	changedColumns.splice(action.columnIndex, 1);

		// 	return {
		// 		...state,
		// 		currentItem: {
		// 			...state.currentItem,
		// 			columns: changedColumns,
		// 		},
		// 	};

		// case CLEAR_CARDS:
		// 	// @ts-ignore
		// 	var changedColumns: Column[] = state.currentItem.columns;
		// 	changedColumns[action.columnIndex].cards = [];
		// 	return {
		// 		...state,
		// 		currentItem: {
		// 			...state.currentItem,
		// 			columns: changedColumns,
		// 		},
		// 	};

		// case ADD_COLUMN:
		// 	var newColumn: Column = {
		// 		name: action.name,
		// 		taskboard: state.currentItem?.id,
		// 		cards: [],
		// 	};
		// 	return {
		// 		...state,
		// 		currentItem: {
		// 			...state.currentItem,
		// 			// @ts-ignore
		// 			columns: [...state.currentItem.columns, newColumn],
		// 		},
		// 	};

		// case UPDATE_COLUMNS:
		// 	// var changedTaskboard: TaskBoard = state.taskboards[action.taskboardID];
		// 	// changedTaskboard.columns = action.columns;

		// 	return {
		// 		...state,
		// 		updatedCurrentItem: {
		// 			...state.currentItem,
		// 			columns: action.columns,
		// 		},
		// 	};

		// case UPDATE_CARD:
		// 	var changedItem;
		// 	if (state.mode === AppMode.notebook) {
		// 		// @ts-ignore
		// 		var changedNotebook: NoteBook = state.currentItem;
		// 		changedNotebook.cards[action.index] = action.card;
		// 		changedItem = changedNotebook;
		// 	} else {
		// 		// @ts-ignore
		// 		var changedTaskboard: TaskBoard = state.currentItem;
		// 		changedTaskboard.columns.forEach((column) => {
		// 			if (column.name === action.card.parent) column.cards[action.index] = action.card;
		// 		});
		// 		changedItem = changedTaskboard;
		// 	}

		// 	return {
		// 		...state,
		// 		currentItem: changedItem,
		// 	};

		default:
			return state;
	}
}
