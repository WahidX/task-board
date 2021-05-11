import { Grid } from "@chakra-ui/layout";
import React from "react";
import Cards from "./Cards";
import CreateTodo from "./CreateTodo";

interface card {
	title: String;
	timestamp: Date;
	description: String;
	id: number;
}

const cards: card[] = [
	{
		title: "Hello",
		timestamp: new Date(),
		description: "Description",
		id: 1,
	},
	{
		title: "Card2",
		timestamp: new Date(),
		description: "New Card",
		id: 2,
	},
	{
		title: "Last Card",
		timestamp: new Date(),
		description: "Card desc",
		id: 3,
	},
];

function CardList(props) {
	return (
		<Grid templateColumns="repeat(2, 1fr)" gap={6} w="100%">
			<CreateTodo />
			{cards.map((card) => (
				<Cards key={card.id} card={card} />
			))}
		</Grid>
	);
}

export default CardList;
