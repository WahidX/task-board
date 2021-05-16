import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card } from "../../@types/Card";
import Cards from "./Cards";

function DNDCards(props) {
	let card: Card = props.card;

	return (
		<Draggable key={card.id} draggableId={card.id} index={props.index}>
			{(provided, snapshot) => (
				<div
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					isDragging={snapshot.isDragging}
				>
					<Cards card={card} index={props.index} />
				</div>
			)}
		</Draggable>
	);
}

export default DNDCards;
