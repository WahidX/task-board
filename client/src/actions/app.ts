import { NoteBook } from "../@types/NoteBook";
import { TaskBoard } from "../@types/TaskBoard";
import { setToast, toastStatus } from "../components/shared/Toast";
import { AppMode } from "../reducers/app";
import { UPDATE_CURRENT_ITEM, UPDATE_CURRENT_ITEM_NAME } from "./actionTypes";

export const updateCurrent = (mode: AppMode, item: NoteBook | TaskBoard) => {
	setToast(`Notebook: ${item.name} opened`, toastStatus.success);
	return {
		type: UPDATE_CURRENT_ITEM,
		mode,
		item,
	};
};

export const updateCurrentItemName = (name: string) => {
	return {
		type: UPDATE_CURRENT_ITEM_NAME,
		name,
	};
};
