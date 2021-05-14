import { NoteBook } from "../@types/NoteBook";
import { TaskBoard } from "../@types/TaskBoard";
import { AppMode } from "../reducers/app";
import { UPDATE_CURRENT_ITEM } from "./actionTypes";

export const updateCurrent = (mode: AppMode, item: NoteBook | TaskBoard) => {
	return {
		type: UPDATE_CURRENT_ITEM,
		mode,
		item,
	};
};
