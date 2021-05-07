import React from "react";
import Cards from "./Cards";

interface card {
	heading: String;
	timestamp: Date;
	description: String;
	id: number;
}

const cards: card[] = [
	{
		heading: "Hello",
		timestamp: new Date(),
		description: "Description",
		id: 1,
	},
	{
		heading: "Card2",
		timestamp: new Date(),
		description: "New Card",
		id: 2,
	},
	{
		heading: "Last Card",
		timestamp: new Date(),
		description: "Card desc",
		id: 3,
	},
];

function CardsList(props) {
	return (
		<div>
			{cards.map((card) => (
				<Cards key={card.id} card={card} />
			))}
		</div>
	);
}

export default CardsList;
