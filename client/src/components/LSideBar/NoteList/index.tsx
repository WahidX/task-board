import { Button } from "@chakra-ui/button";
import { Divider, List, ListItem, Text } from "@chakra-ui/layout";
import React, { Key } from "react";
import { connect } from "react-redux";
import { NoteBook } from "../../../@types/NoteBook";
import { TaskBoard } from "../../../@types/TaskBoard";
import { updateCurrent } from "../../../actions/app";
import { AppMode } from "../../../reducers/app";
import { RootState } from "../../../store";
import CustomDivider from "../../shared/CustomDivider";
import CreateField from "./CreateField";

type NoteBookArr = [String, NoteBook];
type TaskBoardArr = [String, TaskBoard];

function NoteList(props) {
	let notebooks: NoteBookArr[] = Object.entries(props.notebooks);
	let taskboards: TaskBoardArr[] = Object.entries(props.taskboards);

	let currentItem = props.app.currentItem;

	let handleSelectItem = (item: NoteBook | TaskBoard) => {
		let mode = props.app.mode === "notebook" ? AppMode.notebook : AppMode.taskboard;
		props.dispatch(updateCurrent(mode, item));
	};

	return (
		<div>
			<CustomDivider width={30} />

			<Text>Notebooks</Text>
			<Divider />
			<List>
				<CreateField type="notebook" />
				{notebooks.map((notebookArr: NoteBookArr) => (
					<ListItem key={notebookArr[0] as Key}>
						<Button
							isFullWidth={true}
							colorScheme="teal"
							variant={currentItem && currentItem.id === notebookArr[0] ? "solid" : "ghost"}
							onClick={() => handleSelectItem(notebookArr[1])}
						>
							{notebookArr[1].name}
						</Button>
					</ListItem>
				))}
			</List>

			<CustomDivider width={30} />

			<Text>Task Boards</Text>
			<Divider />
			<CreateField type="taskboard" />
			<List spacing="2">
				{taskboards.map((taskboardArr: TaskBoardArr) => (
					<ListItem key={taskboardArr[0] as Key}>
						<Button
							isFullWidth={true}
							colorScheme="teal"
							variant={currentItem.id === taskboardArr[0] ? "solid" : "ghost"}
							onClick={() => handleSelectItem("taskboard", taskboardArr[1])}
						>
							{taskboardArr[1].name}
						</Button>
					</ListItem>
				))}
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
