import { Divider, List, ListItem, Text, Center } from "@chakra-ui/layout";
import React from "react";

function NoteList(props) {
	return (
		<div>
			<Text>Todos</Text>
			<Divider />
			<List>
				<ListItem>Todo1</ListItem>
				<ListItem>Todo2</ListItem>
				<ListItem>Todo3</ListItem>
			</List>

			<Center height="50px">
				<Divider />
			</Center>

			<Text>Task Boards</Text>
			<Divider />
			<List>
				<ListItem>Task Board1</ListItem>
				<ListItem>Task Board2</ListItem>
				<ListItem>Task Board3</ListItem>
			</List>
		</div>
	);
}

export default NoteList;
