import { AppMode } from "../reducers/app";
import { NoteBook } from "./NoteBook";
import { TaskBoard } from "./TaskBoard";

export interface AppStore {
	local: Boolean;
	mode: AppMode;
	currentItem: unknown | NoteBook | TaskBoard; // have to check
	error: string;
	loading: Boolean;
	config: Object;
}

export interface ItemStore {
	notebooks: {
		[index: string]: NoteBook;
	};
	taskboards: {
		[index: string]: TaskBoard;
	};
	loading: Boolean;
}

export interface UserStore {
	// profile?: UserProfile;
	error: string;
	isLoggedin: Boolean;
	loading: Boolean;
}
