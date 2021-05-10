import { Divider, List, ListItem, Text } from "@chakra-ui/layout";
import React from "react";

import CustomDivider from "../shared/CustomDivider";

function NoteList(props) {
	return (
		<div>
			<CustomDivider width={30} />

			<Text>Todos</Text>
			<Divider />
			<List>
				<ListItem>Todo1</ListItem>
				<ListItem>Todo2</ListItem>
				<ListItem>Todo3</ListItem>
			</List>

			<CustomDivider width={30} />

			<Text>Task Boards</Text>
			<Divider />
			<List>
				<ListItem>Task Board1</ListItem>
				<ListItem>Task Board2</ListItem>
				<ListItem>Task Board3</ListItem>
			</List>

			<CustomDivider width={30} />
		</div>
	);
}

export default NoteList;
