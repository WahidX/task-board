import { Box } from "@chakra-ui/layout";
import React from "react";
import Column from "./Column";
import LSidebar from "./LSideBar";

function Home(props) {
	return (
		<Box display="flex">
			<LSidebar />
			<Column />
		</Box>
	);
}

export default Home;
