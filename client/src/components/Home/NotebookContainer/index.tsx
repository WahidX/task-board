import { Grid } from "@chakra-ui/layout";
import React from "react";
import { connect } from "react-redux";
import { Card } from "../../../@types/Card";
import { NoteBook } from "../../../@types/NoteBook";
import { RootState } from "../../../store";
import Cards from "../Cards";
import CreateCard from "../CreateCard";

function NotebookContainer(props) {
	let notebook: NoteBook = props.item;
	let cards = notebook.cards;

	return (
		<Grid templateColumns="repeat(2, 1fr)" gap={6} w="100%">
			<CreateCard />
			{cards.map((card, index) => (
				<Cards key={card.id} card={card} index={index} />
			))}
		</Grid>
	);
}

function mapStoreToProps(state: RootState) {
	return {
		app: state.app,
		items: state.items,
	};
}

export default connect(mapStoreToProps)(NotebookContainer);
