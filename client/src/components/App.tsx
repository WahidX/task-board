import * as React from "react";
import { ChakraProvider, Box, theme, Center, Container } from "@chakra-ui/react";

import Header from "./shared/Header";
import axios from "axios";
import Home from "./Home";

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
			<Container
				maxW={{
					sm: "container.md",
					md: "container.xl",
				}}
			>
				<Box fontSize="xl">
					<Header />
					<Home />
				</Box>
			</Container>
		</ChakraProvider>
	);
};

export default App;
