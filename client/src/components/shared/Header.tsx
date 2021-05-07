import { IconButton } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import React from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { ColorModeSwitcher } from "./../ColorModeSwitcher";

function Header(props) {
	return (
		<Box textAlign="start">
			<Box
				w={{
					sm: "100%",
					md: "60%",
				}}
				bgColor="red"
			>
				<IconButton>
					<AiOutlineMenu />
				</IconButton>

				<ColorModeSwitcher justifySelf="flex-end" />
			</Box>
		</Box>
	);
}

export default Header;
