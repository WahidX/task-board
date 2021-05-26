import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { connect } from "react-redux";
import { AppMode } from "../../reducers/app";
import { RootState } from "../../store";
import ItemDescriptor from "./ItemDescriptor";
import NotebookContainer from "./NotebookContainer";
import TaskBoardContainer from "./TaskBoardContainer";

function Home(props) {
	return (
		<Box marginTop="10">
			<ItemDescriptor item={props.app.currentItem} />
			{/* <Text>{props.app.currentItem ? `${props.app.currentItem.name}` : "Open an Item"}</Text> */}
			{props.app.mode === AppMode.notebook ? <NotebookContainer /> : <TaskBoardContainer />}
		</Box>
	);
}

let mapStoreToProps = (state: RootState) => {
	return {
		app: state.app,
	};
};

export default connect(mapStoreToProps)(Home);
