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

type NoteBookArr = [string, NoteBook];
type TaskBoardArr = [string, TaskBoard];

function NoteList(props) {
	let notebooks: NoteBookArr[] = Object.entries(props.notebooks);
	let taskboards: TaskBoardArr[] = Object.entries(props.taskboards);

	let currentItem = props.app.currentItem;

	let handleSelectItem = (type: AppMode, item: NoteBook | TaskBoard) => {
		props.onCloseHandle();
		props.dispatch(updateCurrent(type, item));
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
							onClick={() => handleSelectItem(AppMode.notebook, notebookArr[1])}
						>
							{notebookArr[1].name}
						</Button>
					</ListItem>
				))}
			</List>

			<CustomDivider width={30} />

			<Text>Task Boards</Text>
			<Divider />
			<List>
				<CreateField type="taskboard" />
				{taskboards.map((taskboardArr: TaskBoardArr) => (
					<ListItem key={taskboardArr[0] as Key}>
						<Button
							isFullWidth={true}
							colorScheme="teal"
							variant={currentItem && currentItem.id === taskboardArr[0] ? "solid" : "ghost"}
							onClick={() => handleSelectItem(AppMode.taskboard, taskboardArr[1])}
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
