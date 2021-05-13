import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import CardList from "./CardList";

function Home(props) {
	return (
		<Box marginTop="10">
			<Text>{props.app.currentItem ? `${props.app.currentItem.name}` : "Open an Item"}</Text>
			<CardList />
		</Box>
	);
}

let mapStoreToProps = (state: RootState) => {
	return {
		app: state.app,
	};
};

export default connect(mapStoreToProps)(Home);
