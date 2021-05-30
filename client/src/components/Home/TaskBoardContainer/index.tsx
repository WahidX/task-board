import { Grid, Flex } from "@chakra-ui/layout";
import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { Card } from "../../../@types/Card";
import { TaskBoard } from "../../../@types/TaskBoard";
import { updateCards, updateColumns } from "../../../actions/notebook";
import { reorder, getColumnIndex } from "../../../helpers/DND_Utils";
import { RootState } from "../../../store";
import ColumnComponent from "./ColumnComponent";
import CreateColumn from "./CreateColumn";

function TaskBoardContainer(props) {
	let item: TaskBoard = props.item;

	let onDragEnd = (result: DropResult) => {
		if (!result.destination) return; // Dragged outside

		if (result.type === "task") {
			if (result.source.droppableId === result.destination.droppableId) {
				// reordering within a column
				let [columnIndex, newCardsArr] = getColumnIndex(item.columns, result.source.droppableId);
				newCardsArr = reorder(newCardsArr, result.source.index, result.destination.index);
				props.dispatch(updateCards(item.id, columnIndex, newCardsArr));
			} else {
				// moving from one column to another
				let [srcColumnIndex, srcCardsArr] = getColumnIndex(item.columns, result.source.droppableId);
				// deletion
				let movingCard: Card = item.columns[srcColumnIndex].cards[result.source.index];
				srcCardsArr.splice(result.source.index, 1);
				props.dispatch(updateCards(item.id, srcColumnIndex, srcCardsArr));

				// insertion
				let [destColumnIndex, destCardsArr] = getColumnIndex(
					item.columns,
					result.destination.droppableId
				);
				destCardsArr.splice(result.destination.index, 0, movingCard);
				props.dispatch(updateCards(item.id, destColumnIndex, destCardsArr));
			}
		} else if (result.source.index !== result.destination.index) {
			// type is column and its reordering
			let newColumnArr = reorder(item.columns, result.source.index, result.destination.index);
			props.dispatch(updateColumns(item.id, newColumnArr));
		}
	};

	return (
		<Flex align="start" flexDirection="row" overflowX="auto" h="80vh">
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="all-columns" direction="horizontal" type="column">
					{(provided) => (
						<Grid
							templateColumns="repeat(5, 1fr)"
							gap="3"
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{item.columns.length !== 0 &&
								item.columns.map((column, index) => (
									<ColumnComponent key={column.name} column={column} index={index} item={item} />
								))}
							{provided.placeholder}
						</Grid>
					)}
				</Droppable>
				<CreateColumn item={item} />
			</DragDropContext>
		</Flex>
	);
}

function mapStoreToProps(state: RootState) {
	return {
		app: state.app,
	};
}

export default connect(mapStoreToProps)(TaskBoardContainer);
