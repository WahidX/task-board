import React from "react";
import { connect } from "react-redux";

// chakra
import { Button, IconButton } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";

import { AiOutlineMenu } from "react-icons/ai";
import { ColorModeSwitcher } from "./../ColorModeSwitcher";
import { RootState } from "../../store";

function Header(props) {
	let islocal: Boolean = props.app.local;

	return (
		<Box>
			<Box as="div" p="3" display="flex" justifyContent="space-between" bgColor="teal" borderRadius="10px">
				<IconButton>
					<AiOutlineMenu />
				</IconButton>
				<Text>Task Board</Text>
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
		</Box>
	);
}

function mapStateToProps(state: RootState) {
	return {
		app: state.app,
	};
}

export default connect(mapStateToProps)(Header);
