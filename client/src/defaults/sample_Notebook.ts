import { v1 } from "uuid";
import { Card, Todo, TodoItem } from "../@types/Card";
import { ID } from "../@types/Global";
import { NoteBook } from "../@types/NoteBook";
import { AppMode } from "../reducers/app";

export const sampleNotebook = (name: string): NoteBook => {
	return {
		name,
		id: v1(),
		cards: sampleCards(name),
		lastUpd: new Date(),
	};
};

const sampleCards = (parent: string): Card[] => [
	sampleGroceryCard(parent),
	sampleAddressCard(parent),
];

const sampleGroceryCard = (parent: string): Card => {
	let title = "Grocery List";
	return {
		title,
		id: v1(),
		content: "Things to buy...",
		hasTodo: true,
		todo: sampleTodo(title),
		parent,
		parentType: AppMode.notebook,
		timestamp: new Date(),
	};
};

const sampleAddressCard = (parent: string): Card => {
	let title = "Work Address";
	return {
		title,
		id: v1(),
		content: "Bangalore, KA\nWhitefield",
		hasTodo: false,
		parent,
		parentType: AppMode.notebook,
		timestamp: new Date(),
	};
};

const sampleTodo = (card: ID): Todo => {
	return {
		card,
		completed: [getTodoItem("Egg", true)],
		incompleted: [getTodoItem("Sugar", false), getTodoItem("Oats", false)],
	};
};

let getTodoItem = (content: string, isComplete: Boolean): TodoItem => {
	return {
		content,
		isComplete,
		timestamp: new Date(),
	};
};
