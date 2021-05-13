import { Divider, List, ListItem, Text } from "@chakra-ui/layout";
import React, { Key } from "react";
import { connect } from "react-redux";
import { RootState } from "../../../store";
import CustomDivider from "../../shared/CustomDivider";
import CreateField from "./CreateField";

type NoteBookArr = [String, NoteBook];
type TaskBoardArr = [String, TaskBoard];

function NoteList(props) {
	let notebooks: NoteBookArr[] = Object.entries(props.notebooks);
	let taskboards: TaskBoardArr[] = Object.entries(props.taskboards);

	let mode = props.app.mode;
	let currentItem = props.app.currentItem;
	console.log("mode: ", mode, "currentItem: ", currentItem);

	return (
		<div>
			<CustomDivider width={30} />

			<Text>Notebooks</Text>
			<Divider />
			<List spacing="2">
				<CreateField type="notebook" />
				{notebooks.map((notebookArr: NoteBookArr) => (
					<ListItem bg={currentItem === notebookArr[0] ? "grey" : ""} key={notebookArr[0] as Key}>
						{notebookArr[1].name}
					</ListItem>
				))}

				<ListItem>Todo1</ListItem>
				<ListItem>Todo2</ListItem>
				<ListItem>Todo3</ListItem>
			</List>

			<CustomDivider width={30} />

			<Text>Task Boards</Text>
			<Divider />
			<CreateField type="taskboard" />
			<List spacing="2">
				{taskboards.map((taskboardArr: TaskBoardArr) => (
					<ListItem key={taskboardArr[0] as Key}>{taskboardArr[1].name}</ListItem>
				))}

				<ListItem>Task Board1</ListItem>
				<ListItem>Task Board2</ListItem>
				<ListItem>Task Board3</ListItem>
			</List>

			<CustomDivider width={30} />
		</div>
	);
}

function mapStoreToProps(state: RootState) {
	return {
		notebooks: state.items.notebooks,
		taskboards: state.items.taskboards,
		user: state.user,
		app: state.app,
	};
}

export default connect(mapStoreToProps)(NoteList);
