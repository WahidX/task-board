import React from "react";
import { Box } from "@chakra-ui/react";

function Cards(props) {
	let card = props.card;
	return (
		<div>
			<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
				<h2>{card.heading}</h2>
				<span>{card.id + card.description}</span>
			</Box>
		</div>
	);
}

export default Cards;
