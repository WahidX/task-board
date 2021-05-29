import { Action, AnyAction, Dispatch } from "redux";
import {
	ADD_NOTEBOOK_SUCCESS,
	EDIT_NOTEBOOK_SUCCESS,
	DELETE_NOTEBOOK_SUCCESS,
	START_ITEM_LOADING,
	ITEM_ERROR,
	ADD_CARD_SUCCESS,
	EDIT_CARD_SUCCESS,
	ADD_TASKBOARD_SUCCESS,
	UPDATE_COLUMNS,
	UPDATE_CARDS,
	EDIT_COLUMN,
	DELETE_COLUMN,
	CLEAR_CARDS,
	ADD_COLUMN,
} from "./actionTypes";
import { sampleNotebook } from "../defaults/sample_Notebook";
import { Card } from "../@types/Card";
import { NoteBook } from "../@types/NoteBook";
import { setToast, toastStatus } from "../components/shared/Toast";
import { ID } from "../@types/Global";
import { sampleTaskBoard } from "../defaults/sample_TaskBoard";
import { Column, TaskBoard } from "../@types/TaskBoard";

// General
export const itemLoading = (): Action => {
	return {
		type: START_ITEM_LOADING,
	};
};

export const itemError = (error: any): AnyAction => {
	return {
		type: ITEM_ERROR,
		error,
	};
};

// Add Notebook
export const addNotebookSuccess = (notebook: NoteBook): AnyAction => {
	return {
		type: ADD_NOTEBOOK_SUCCESS,
		notebook,
	};
};

export const addNotebook = (name: string) => {
	return (dispatch: Dispatch) => {
		dispatch(itemLoading());
		dispatch(addNotebookSuccess(sampleNotebook(name)));
		setToast("Notebook created!", toastStatus.success);
	};
};

// Edit Notebook
export const editNotebookSuccess = (notebook: NoteBook) => {
	return {
		type: EDIT_NOTEBOOK_SUCCESS,
		notebook,
	};
};

export const editNotebook = (notebook: NoteBook) => {
	return (dispatch: Dispatch) => {
		dispatch(itemLoading());
		//
		//	API call to add NoteBook
		//
		// Success:
		dispatch(editNotebookSuccess(notebook));
		// Alert

		// Failed
		// dispatch(itemError(err));
		// alert err
	};
};

// Delete Notebook
export const deleteNotebookSuccess = (id: ID) => {
	return {
		type: DELETE_NOTEBOOK_SUCCESS,
		id,
	};
};

export const deleteNotebook = (id: ID) => {
	return (dispatch: Dispatch) => {
		dispatch(itemLoading());
		//
		//	API call to add NoteBook
		//
		// Success:
		dispatch(deleteNotebookSuccess(id));
		// Alert

		// Failed
		// dispatch(itemError(err));
		// alert err
	};
};

export const addCardSuccess = (card: Card, columnIndex?: number) => {
	return {
		type: ADD_CARD_SUCCESS,
		card,
		columnIndex,
	};
};

export const addCard = (card: Card, columnIndex?: number) => {
	return (dispatch: Dispatch) => {
		dispatch(itemLoading());
		dispatch(addCardSuccess(card, columnIndex));
		setToast("Card created!", toastStatus.success);
	};
};

export const editCardSuccess = (card: Card) => {
	return {
		type: EDIT_CARD_SUCCESS,
		card,
	};
};

export const editCard = (card: Card) => {
	return (dispatch: Dispatch) => {
		dispatch(itemLoading());

		dispatch(editCardSuccess(card));
	};
};

export const deleteCardSuccess = (id: ID) => {
	return {
		type: ADD_CARD_SUCCESS,
		id,
	};
};

export const deleteCard = (id: ID) => {
	return (dispatch: Dispatch) => {
		dispatch(itemLoading());
		dispatch(deleteCardSuccess(id));
	};
};

export const addTaskBoardSuccess = (taskboard: TaskBoard) => {
	return {
		type: ADD_TASKBOARD_SUCCESS,
		taskboard,
	};
};

export const addTaskBoard = (name: string) => {
	return (dispatch: Dispatch) => {
		dispatch(itemLoading());
		dispatch(addTaskBoardSuccess(sampleTaskBoard(name)));
		setToast("TaskBoard created!", toastStatus.success);
	};
};

export const updateCards = (taskboardID: ID, columnIndex: number, cards: Card[]) => {
	return {
		type: UPDATE_CARDS,
		taskboardID,
		cards,
		columnIndex,
	};
};

export const updateColumns = (taskboardID: ID, columns: Column[]) => {
	return {
		type: UPDATE_COLUMNS,
		taskboardID,
		columns,
	};
};

export const editColumn = (taskboardID: ID, columnIndex: number, name: string) => {
	return {
		type: EDIT_COLUMN,
		taskboardID,
		columnIndex,
		name,
	};
};

export const deleteColumn = (taskboardID: ID, columnIndex: number) => {
	return {
		type: DELETE_COLUMN,
		taskboardID,
		columnIndex,
	};
};

export const clearCards = (columnIndex: number) => {
	return {
		type: CLEAR_CARDS,
		columnIndex,
	};
};

export const addColumn = (name: string, taskboardID: ID) => {
	return {
		type: ADD_COLUMN,
		name,
		taskboardID,
	};
};
