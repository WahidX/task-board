import * as React from "react";
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme } from "@chakra-ui/react";

import Column from "./Column";
import Header from "./shared/Header";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box textAlign="center" fontSize="xl">
			<Header />
			<Column />
		</Box>
	</ChakraProvider>
);
