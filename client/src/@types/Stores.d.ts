import { AppMode } from "../reducers/app";
import { NoteBook } from "./NoteBook";
import { TaskBoard } from "./TaskBoard";

export interface AppStore {
	local: Boolean;
	mode: AppMode;
	currentItem?: NoteBook | TaskBoard; // have to check
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
	error: String;
}

export interface UserStore {
	// profile?: UserProfile;
	error: string;
	isLoggedin: Boolean;
	loading: Boolean;
}
