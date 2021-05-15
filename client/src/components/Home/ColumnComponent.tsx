import React from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { Card } from "../../@types/Card";
import { Column } from "../../@types/TaskBoard";
import { reorderCards } from "../../actions/notebook";
import reorder from "../../helpers/reorder";
import { RootState } from "../../store";
import Cards from "./Cards";
import { getListStyle, getItemStyle } from "./taskboardStyle";

function ColumnComponent(props) {
	let column: Column = props.column;

	let onDragEnd = (result: DropResult) => {
		if (!result.destination) return;

		const cards = reorder(column.cards, result.source.index, result.destination.index);
		props.dispatch(reorderCards(props.app.currentItem.id, column.name, cards));
	};

	return (
		<div>
			{column.name}
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId={`droppable-${column.name}`}>
					{(provided, snapshot) => (
						<div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
							{column.cards.map((card: Card, index: number) => (
								<Draggable key={card.id} draggableId={`card-${card.id}`} index={index}>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
										>
											<Cards card={card} key={card.id} />
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
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
