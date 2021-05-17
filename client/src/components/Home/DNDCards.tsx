import { useColorMode } from "@chakra-ui/color-mode";
import React, { Key } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card } from "../../@types/Card";
import Cards from "./Cards";
import { getItemStyle } from "./taskboardStyle";

function DNDCards(props) {
	let card: Card = props.card;
	const { colorMode } = useColorMode();

	return (
		<Draggable key={card.id} draggableId={card.id} index={props.index}>
			{(provided, snapshot) => (
				<div
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					style={getItemStyle(snapshot.isDragging, colorMode, provided.draggableProps.style)}
				>
					<Cards card={card} index={props.index} />
				</div>
			)}
		</Draggable>
	);
}

export default DNDCards;
