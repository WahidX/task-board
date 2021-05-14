import { CardParentType } from "../enums";
import { ID } from "./Global";

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
	card: ID;
	completed: TodoItem[];
	incompleted: TodoItem[];
}

export interface TodoItem {
	content: String;
	isComplete: Boolean;
	timestamp: Date;
}
