import { Action, AnyAction, Dispatch } from "redux";
import {
	ADD_NOTEBOOK_SUCCESS,
	ADD_NOTEBOOK_FAILED,
	EDIT_NOTEBOOK_SUCCESS,
	EDIT_NOTEBOOK_FAILED,
	DELETE_NOTEBOOK_SUCCESS,
	DELETE_NOTEBOOK_FAILED,
	START_ITEM_LOADING,
	ITEM_ERROR,
	ADD_CARD_SUCCESS,
	EDIT_CARD_SUCCESS,
} from "./actionTypes";

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

export const addNotebookSuccess = (name: String): AnyAction => {
	return {
		type: ADD_NOTEBOOK_SUCCESS,
		name,
	};
};

export const addNotebook = (name: String) => {
	return (dispatch: Dispatch) => {
		dispatch(itemLoading());
		//
		//	API call to add NoteBook
		//
		// Success:
		dispatch(addNotebookSuccess(name));
		// Alert

		// Failed
		// dispatch(itemError(err));
		// alert err
	};
};

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

export const addCardSuccess = (card: Card) => {
	return {
		type: ADD_CARD_SUCCESS,
		card,
	};
};

export const addCard = (card: Card) => {
	return (dispatch: Dispatch) => {
		dispatch(itemLoading());

		// For now cards adding to notebook
		//
		//	API call to add Card
		//
		// Success:
		dispatch(addCardSuccess(card));
		// Alert

		// Failed
		// dispatch(itemError(err));
		// alert err
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

		// For now cards adding to notebook
		//
		//	API call to add Card
		//
		// Success:
		dispatch(editCardSuccess(card));
		// Alert

		// Failed
		// dispatch(itemError(err));
		// alert err
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

		// For now cards adding to notebook
		//
		//	API call to add Card
		//
		// Success:
		dispatch(deleteCardSuccess(id));
		// Alert

		// Failed
		// dispatch(itemError(err));
		// alert err
	};
};
