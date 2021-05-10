import { List, ListItem } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";

import React from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import Settings from "../Settings";
import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/react";

function Quicklinks(props: Object) {
	const { onClose, onOpen, isOpen } = useDisclosure();

	return (
		<div>
			<List>
				<ListItem onClick={onOpen}>
					Settings
					<Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={"md"}>
						<DrawerOverlay />
						<DrawerContent>
							<DrawerHeader display="flex" justifyContent="space-between">
								<Text as="h1">Settings</Text>
								<Button onClick={onClose}>Close</Button>
							</DrawerHeader>
							<DrawerBody>
								<Settings />
							</DrawerBody>
						</DrawerContent>
					</Drawer>
				</ListItem>
				<ListItem>About</ListItem>
				<ListItem>Issues & Feedback</ListItem>
			</List>
		</div>
	);
}

export default Quicklinks;
