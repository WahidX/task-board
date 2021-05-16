import { Text } from "@chakra-ui/react";
import React from "react";
import { Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { Card } from "../../@types/Card";
import { Column } from "../../@types/TaskBoard";
import { RootState } from "../../store";
import DNDCards from "./DNDCards";

function ColumnComponent(props) {
	let column: Column = props.column;

	// let onDragEnd = (result: DropResult) => {
	// 	if (!result.destination) return;

	// 	const cards = reorder(column.cards, result.source.index, result.destination.index);
	// 	props.dispatch(reorderCards(props.app.currentItem.id, column.name, cards));
	// };
	console.log(column.name, props.index);
	return (
		<Draggable draggableId={`${column.name}`} key={column.name as key} index={props.index}>
			{(provided) => (
				<div {...provided.draggableProps} ref={provided.innerRef}>
					<Text fontSize="3xl" textAlign="center" {...provided.dragHandleProps}>
						{column.name}
					</Text>
					<Droppable droppableId={`${column.name}`} type="task">
						{(provided, snapshot) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
								isDraggingOver={snapshot.isDraggingOver}
							>
								{column.cards.map((card: Card, index: number) => (
									<DNDCards card={card} index={index} />
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</div>
			)}
		</Draggable>
	);
}

function mapStoreToProps(state: RootState) {
	return {
		app: state.app,
	};
}

export default connect(mapStoreToProps)(ColumnComponent);

interface ColumnComponentProps {
	column: Column;
}
