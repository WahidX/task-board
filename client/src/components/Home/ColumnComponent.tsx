import { Heading, VStack } from "@chakra-ui/layout";
import React from "react";
import { Column } from "../../@types/TaskBoard";
import Cards from "./Cards";

function ColumnComponent(props) {
	let column: Column = props.column;

	return (
		<VStack>
			<p>{column.name}</p>
			{column.cards.map((card) => (
				<Cards key={card.id} card={card} />
			))}
		</VStack>
	);
}

export default ColumnComponent;
