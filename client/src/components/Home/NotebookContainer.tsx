import { Grid } from "@chakra-ui/layout";
import React from "react";
import { connect } from "react-redux";
import { Card } from "../../@types/Card";
import { RootState } from "../../store";
import Cards from "./Cards";
import CreateCard from "./CreateCard";

function NotebookContainer(props) {
	let cards: Card[];
	cards = props.app.currentItem ? props.app.currentItem.cards : [];

	return (
		<Grid templateColumns="repeat(2, 1fr)" gap={6} w="100%">
			<CreateCard />
			{cards.map((card) => (
				<Cards key={card.id} card={card} />
			))}
		</Grid>
	);
}

function mapStoreToProps(state: RootState) {
	return {
		app: state.app,
	};
}

export default connect(mapStoreToProps)(NotebookContainer);
