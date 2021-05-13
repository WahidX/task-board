import { Card, Todo, TodoItem } from "../@types/Card";
import { CardParentType } from "../enums";

// As of now name is used as ID
// later will be replaced with db id
export const sampleNotebook = (name: String): NoteBook => {
	return {
		name,
		id: name,
		cards: sampleCards(name),
		lastUpd: new Date(),
	};
};

const sampleCards = (parent: String): Card[] => [sampleGroceryCard(parent), sampleAddressCard(parent)];

const sampleGroceryCard = (parent: String): Card => {
	let title = "Grocery List";
	return {
		title,
		id: title,
		content: "Things to buy...",
		hasTodo: true,
		todo: sampleTodo(),
		parent,
		parentType: CardParentType.notebook,
		timestamp: new Date(),
	};
};

const sampleAddressCard = (parent: String): Card => {
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

const sampleTodo = (): Todo => {
	return {
		completed: [getTodoItem("Egg", true)],
		incompleted: [getTodoItem("Sugar", false), getTodoItem("Oats", false)],
	};
};

let getTodoItem = (content: String, isComplete: Boolean): TodoItem => {
	return {
		content,
		isComplete,
		timestamp: new Date(),
	};
};
