import { Card } from "../@types/Card";
import { Column, TaskBoard } from "../@types/TaskBoard";
import { CardParentType } from "../enums";

export const sampleTaskBoard = (name: string): TaskBoard => {
	return {
		name,
		id: name,
		columns: sampleColumns(name),
		description: "TaskBoard description goes here...",
		lastUpd: new Date(),
	};
};

const sampleColumns = (parent: string): Column[] => {
	return [sampleColumnTodos(parent), sampleColumnInprogress(parent), sampleColumnDone(parent)];
};

const sampleColumnTodos = (parent: string): Column => {
	let name = "Todos";
	return {
		name,
		taskboard: parent,
		cards: [
			getCard(name, "Study for Physics Test"),
			getCard(name, "Practice Mechanics"),
			getCard(name, "Start Creating your own cards"),
		],
	};
};

const sampleColumnInprogress = (parent: string): Column => {
	let name = "In Progress";
	return {
		name,
		taskboard: parent,
		cards: [getCard(name, "Math assignments")],
	};
};

const sampleColumnDone = (parent: string): Column => {
	let name = "Done";
	return {
		name,
		taskboard: parent,
		cards: [getCard(name, "Practice Derivatives exercises")],
	};
};

const getCard = (parent: string, title: string): Card => {
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
