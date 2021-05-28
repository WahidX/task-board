import { Box } from "@chakra-ui/layout";
import React from "react";
import { connect } from "react-redux";
import { AppMode } from "../../reducers/app";
import { RootState } from "../../store";
import ItemDescriptor from "./ItemDescriptor";
import NotebookContainer from "./NotebookContainer";
import TaskBoardContainer from "./TaskBoardContainer";

function Home(props) {
	return (
		<Box marginTop="8" width="full">
			{props.app.currentItem && <ItemDescriptor item={props.app.currentItem} />}
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
