import { Box, VStack } from "@chakra-ui/layout";
import React from "react";
import NoteList from "./NoteList";

function LSidebar(props) {
	return (
		<Box marginRight="20">
			<VStack>
				<NoteList />
			</VStack>
		</Box>
	);
}

export default LSidebar;
