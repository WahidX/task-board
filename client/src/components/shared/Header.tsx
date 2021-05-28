import React from "react";
import { connect } from "react-redux";

// chakra
import { Button, IconButton } from "@chakra-ui/button";
import { Box, Center, Heading, Text } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/hooks";

import { AiOutlineMenu } from "react-icons/ai";
import { ColorModeSwitcher } from "./../ColorModeSwitcher";
import { RootState } from "../../store";
import LSidebar from "../LSideBar";
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from "@chakra-ui/modal";
import strings from "../../strings";

function Header(props) {
	let islocal: boolean = props.app.local;
	const { onOpen, onClose, isOpen } = useDisclosure();

	return (
		<Box
			as="div"
			p="3"
			display="flex"
			justifyContent="space-between"
			bgColor="teal"
			borderRadius="10px"
		>
			<IconButton aria-label="side menu button" onClick={onOpen}>
				<AiOutlineMenu />
			</IconButton>

			<Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader borderBottomWidth="1px">{strings.APP_NAME()}</DrawerHeader>
					<DrawerBody>
						<LSidebar onCloseHandle={onClose} />
					</DrawerBody>
				</DrawerContent>
			</Drawer>

			<Heading textAlign="left" fontSize="4xl">
				{strings.APP_NAME()}{" "}
			</Heading>

			<Box>
				<Button m="1" disabled={islocal}>
					Login
				</Button>
				<Button m="1" disabled={islocal}>
					Signup
				</Button>
				<ColorModeSwitcher justifySelf="flex-end" />
			</Box>
		</Box>
	);
}

function mapStoreToProps(state: RootState) {
	return {
		app: state.app,
	};
}

export default connect(mapStoreToProps)(Header);
