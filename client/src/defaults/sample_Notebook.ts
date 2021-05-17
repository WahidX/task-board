import { Card, Todo, TodoItem } from "../@types/Card";
import { ID } from "../@types/Global";
import { NoteBook } from "../@types/NoteBook";
import { CardParentType } from "../enums";

// As of now name is used as ID
// later will be replaced with db id
export const sampleNotebook = (name: string): NoteBook => {
	return {
		name,
		id: name,
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
		id: title,
		content: "Things to buy...",
		hasTodo: true,
		todo: sampleTodo(title),
		parent,
		parentType: CardParentType.notebook,
		timestamp: new Date(),
	};
};

const sampleAddressCard = (parent: string): Card => {
	let title = "Work Address";
	return {
		title,
		id: title,
		content: "Bangalore, KA\nWhitefield",
		hasTodo: false,
		parent,
		parentType: CardParentType.notebook,
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
