import { Card } from "../@types/Card";
import { Column, TaskBoard } from "../@types/TaskBoard";
import { CardParentType } from "../enums";

export const sampleTaskBoard = (name: String): TaskBoard => {
	return {
		name,
		id: name,
		columns: sampleColumns(name),
		description: "TaskBoard description goes here...",
		lastUpd: new Date(),
	};
};

const sampleColumns = (parent: String): Column[] => {
	return [sampleColumnTodos(parent), sampleColumnInprogress(parent), sampleColumnDone(parent)];
};

const sampleColumnTodos = (parent: String): Column => {
	let name = "Todos";
	return {
		name,
		taskboard: parent,
		cards: [getCard(name, "Study for Physics Test"), getCard(name, "Practice Mechanics"), getCard(name, "Start Creating your own cards")],
	};
};

const sampleColumnInprogress = (parent: String): Column => {
	let name = "In Progress";
	return {
		name,
		taskboard: parent,
		cards: [getCard(name, "Math assignments")],
	};
};

const sampleColumnDone = (parent: String): Column => {
	let name = "Done";
	return {
		name,
		taskboard: parent,
		cards: [getCard(name, "Practice Derivatives exercises")],
	};
};

const getCard = (parent: String, title: String): Card => {
	return {
		title,
		id: title,
		content: "",
		hasTodo: false,
		parent,
		parentType: CardParentType.taskboard,
		timestamp: new Date(),
	};
};
