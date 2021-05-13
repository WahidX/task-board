import { CardParentType } from "../enums";

export interface Card {
	id: ID;
	title: String;
	content: String;
	hasTodo: Boolean;
	todo?: Todo;
	parentType: CardParentType;
	parent: ID;
	timestamp: Date;
}

export interface Todo {
	completed: TodoItem[];
	incompleted: TodoItem[];
}

export interface TodoItem {
	content: String;
	isComplete: Boolean;
	timestamp: Date;
}
