import { v1 } from "uuid";
import { Card } from "../@types/Card";
import { Column, TaskBoard } from "../@types/TaskBoard";
import { AppMode } from "../reducers/app";

export const sampleTaskBoard = (name: string): TaskBoard => {
	return {
		name,
		id: v1(),
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
		id: v1(),
		content: "",
		hasTodo: false,
		parent,
		parentType: AppMode.taskboard,
		timestamp: new Date(),
	};
};
