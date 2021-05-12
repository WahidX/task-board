import { Action, AnyAction, Dispatch } from "redux";
import {
	ADD_NOTEBOOK_SUCCESS,
	ADD_NOTEBOOK_FAILED,
	EDIT_NOTEBOOK_SUCCESS,
	EDIT_NOTEBOOK_FAILED,
	DELETE_NOTEBOOK_SUCCESS,
	DELETE_NOTEBOOK_FAILED,
	START_ITEM_LOADING,
} from "./actionTypes";

export const startItemLoading = (): Action => {
	return {
		type: START_ITEM_LOADING,
	};
};

export const addNotebookSuccess = (name: String): AnyAction => {
	return {
		type: ADD_NOTEBOOK_SUCCESS,
		name,
	};
};

export const addNotebookFailed = (): Action => {
	return {
		type: ADD_NOTEBOOK_FAILED,
	};
};

export const addNotebook = (name: String) => {
	return (dispatch: Dispatch) => {
		dispatch(startItemLoading());
		//
		//	API call to add NoteBook
		//
		// Success:
		dispatch(addNotebookSuccess(name));
		// Alert

		// Failed
		// dispatch(addNotebookFailed());
		// alert err
	};
};
