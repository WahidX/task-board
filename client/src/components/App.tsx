import * as React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// chakra
import { ChakraProvider, Box, theme, Container } from "@chakra-ui/react";

// types
import { RootState } from "../store";

// Components
import Header from "./shared/Header";
import Home from "./Home";

const App = (props) => {
	console.log(props.user.isLoggedin);

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
					<Router>
						<Switch>
							<Route exact path="/" component={Home} />
							{/* <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} /> */}
						</Switch>
					</Router>
				</Box>
			</Container>
		</ChakraProvider>
	);
};

function mapStateToProps(state: RootState) {
	return {
		app: state.app,
		user: state.user,
	};
}

export default connect(mapStateToProps)(App);
