import { List, ListItem } from "@chakra-ui/layout";
import React from "react";

function Quicklinks(props) {
	return (
		<div>
			<List>
				<ListItem>Settings</ListItem>
				<ListItem>About</ListItem>
				<ListItem>Issues & Feedback</ListItem>
			</List>
		</div>
	);
}

export default Quicklinks;
