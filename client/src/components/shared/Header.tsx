import { Button, IconButton } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { ColorModeSwitcher } from "./../ColorModeSwitcher";

function Header(props) {
	return (
		<Box>
			<Box as="div" p="3" display="flex" justifyContent="space-between" bgColor="teal" borderRadius="10px">
				<IconButton>
					<AiOutlineMenu />
				</IconButton>
				<Text>Task Board</Text>
				<Box>
					<Button m="1" disabled>
						Login
					</Button>
					<Button m="1" disabled>
						Signup
					</Button>
					<ColorModeSwitcher justifySelf="flex-end" />
				</Box>
			</Box>
		</Box>
	);
}

export default Header;
