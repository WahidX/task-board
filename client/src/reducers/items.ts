import { Action } from "redux";

interface ItemStore {
	notebooks: {
		[index: string]: NoteBook;
	};
	taskboards: {
		[index: string]: TaskBoard;
	};
}

const initialState: ItemStore = {
	notebooks: {},
	taskboards: {},
};

export default function items(state = initialState, action: Action) {
	switch (action.type) {
		default:
			return state;
	}
}
