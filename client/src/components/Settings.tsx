import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import React from "react";

function Settings(props) {
	return (
		<div>
			<Input type="text" aria-label="name" placeholder="Name" />
			<Input type="email" aria-label="email" placeholder="Email" />
			<Button>Save</Button>
		</div>
	);
}

export default Settings;
