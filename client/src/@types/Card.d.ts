import { CardParentType } from "../enums";
import { ID } from "./Global";

export interface Card {
	id: ID;
	title: string;
	content: string;
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
	content: string;
	isComplete: Boolean;
	timestamp: Date;
}
