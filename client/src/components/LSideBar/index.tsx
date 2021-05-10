// chakra-ui
import { VStack } from "@chakra-ui/layout";

import React from "react";
import NoteList from "./NoteList";
import Quicklinks from "./Quicklinks";

function LSidebar(props) {
	return (
		<VStack>
			<NoteList />
			<Quicklinks />
		</VStack>
	);
}

export default LSidebar;
