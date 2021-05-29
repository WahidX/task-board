import { Box, Center, Text } from "@chakra-ui/layout";
import React from "react";
import { connect } from "react-redux";
import { AppMode } from "../../reducers/app";
import { RootState } from "../../store";
import ItemDescriptor from "./ItemDescriptor";
import NotebookContainer from "./NotebookContainer";
import TaskBoardContainer from "./TaskBoardContainer";

function Home(props) {
	let getItem = () => {
		if (props.app.mode === AppMode.notebook) return props.items.notebooks[props.app.currentItem];
		else return props.items.taskboards[props.app.currentItem];
	};

	let item = getItem();

	return (
		<Box marginTop="8" width="full">
			{props.app.currentItem ? (
				<>
					<ItemDescriptor item={item} />

					{props.app.mode === AppMode.notebook ? (
						<NotebookContainer item={item} />
					) : (
						<TaskBoardContainer item={item} />
					)}
				</>
			) : (
				<Center>
					<Text fontSize="8xl"> Hello World </Text>
				</Center>
			)}
		</Box>
	);
}

let mapStoreToProps = (state: RootState) => {
	return {
		app: state.app,
		items: state.items,
	};
};

export default connect(mapStoreToProps)(Home);
