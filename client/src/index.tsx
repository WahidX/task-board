import * as React from "react";
import ReactDOM from "react-dom";
import { ColorModeScript } from "@chakra-ui/react";
import App from "./components/App";

import { Provider } from "react-redux";
import { store } from "./store";

console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<ColorModeScript />
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
