import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";

import Column from "./Column";
import Header from "./shared/Header";
import axios from "axios";

const App = () => {
	React.useEffect(() => {
		axios
			.get("http://localhost:8000/")
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<Box textAlign="center" fontSize="xl">
				<Header />
				<Column />
			</Box>
		</ChakraProvider>
	);
};

export default App;
