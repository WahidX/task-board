import { AppMode } from "../reducers/app";
import { NoteBook } from "./NoteBook";
import { TaskBoard } from "./TaskBoard";

export interface AppStore {
	local: Boolean;
	mode: AppMode;
	currentItem: unknown | NoteBook | TaskBoard; // have to check
	error: String;
	loading: Boolean;
	config: Object;
}
