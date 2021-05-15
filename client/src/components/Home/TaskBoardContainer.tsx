import { Grid, HStack } from "@chakra-ui/layout";
import React from "react";
import { connect } from "react-redux";
import { TaskBoard } from "../../@types/TaskBoard";
import { RootState } from "../../store";
import ColumnComponent from "./ColumnComponent";

function TaskBoardContainer(props) {
	let currentItem: TaskBoard = props.currentItem;

	return (
		<Grid templateColumns="repeat(5, 1fr)" gap="3">
			{/* DDContext */}
			{currentItem.columns.map((column) => (
				<ColumnComponent column={column} />
			))}
		</Grid>
	);
}

function mapStoreToProps(state: RootState) {
	return {
		currentItem: state.app.currentItem,
	};
}

export default connect(mapStoreToProps)(TaskBoardContainer);
