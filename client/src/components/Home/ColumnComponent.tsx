import { Text } from "@chakra-ui/react";
import React, { Key } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { Card } from "../../@types/Card";
import { Column } from "../../@types/TaskBoard";
import { RootState } from "../../store";
import CreateCard from "./CreateCard";
import DNDCards from "./DNDCards";
import { getListStyle } from "./taskboardStyle";

function ColumnComponent(props) {
	let column: Column = props.column;

	return (
		<Draggable draggableId={`${column.name}`} key={column.name as Key} index={props.index}>
			{(provided) => (
				<div {...provided.draggableProps} ref={provided.innerRef}>
					<Text fontSize="3xl" textAlign="center" {...provided.dragHandleProps}>
						{column.name}
					</Text>
					<CreateCard columnIndex={props.index} columnName={column.name} />
					<Droppable droppableId={`${column.name}`} key={column.name} type="task">
						{(provided, snapshot) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
								// isDraggingOver={snapshot.isDraggingOver}
								style={getListStyle(snapshot.isDraggingOver)}
							>
								{column.cards.map((card: Card, index: number) => (
									<DNDCards card={card} key={card.id} index={index} />
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
