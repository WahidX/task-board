import { Grid } from "@chakra-ui/layout";
import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { TaskBoard } from "../../@types/TaskBoard";
import { reorderCards } from "../../actions/notebook";
import reorder from "../../helpers/DND_Utils";
import { RootState } from "../../store";
import ColumnComponent from "./ColumnComponent";

function TaskBoardContainer(props) {
	let currentItem: TaskBoard = props.currentItem;

	let onDragEnd = (result: DropResult) => {
		console.log("result: ", result);
		if (!result.destination) return;

		// const cards = reorder(column.cards, result.source.index, result.destination.index);
		// props.dispatch(reorderCards(props.app.currentItem.id, column.name, cards));
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="all-columns" direction="horizontal" type="column">
				{(provided) => (
					<Grid templateColumns="repeat(5, 1fr)" gap="3" {...provided.droppableProps} ref={provided.innerRef}>
						{currentItem.columns.map((column, index) => (
							<ColumnComponent column={column} index={index} />
						))}
						{provided.placeholder}
					</Grid>
				)}
			</Droppable>
		</DragDropContext>
	);
}

function mapStoreToProps(state: RootState) {
	return {
		currentItem: state.app.currentItem,
	};
}

export default connect(mapStoreToProps)(TaskBoardContainer);
