import { IconButton } from "@chakra-ui/button";
import { CheckIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addNotebook } from "../../../actions/notebook";
import { RootState } from "../../../store";

function CreateField(props: CreateFieldProps) {
	const [name, setName] = useState("");

	let addItemHandle = (e) => {
		e.preventDefault();
		console.log("To be created : ", name);
		if (name.trim().length !== 0) {
			if (props.type === "notebook") props.dispatch(addNotebook(name));
			// else props.dispatch(addTaskBoard(name));
		}
		setName("");
	};

	return (
		<form onSubmit={addItemHandle}>
			<InputGroup>
				<Input
					type="text"
					variant="filled"
					aria-label="create-field"
					placeholder={`Enter ${props.type} name`}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<InputRightElement
					children={
						<IconButton aria-label={`create-field-${props.type}`} type="submit">
							<CheckIcon color="green.500" />
						</IconButton>
					}
				/>
			</InputGroup>
		</form>
	);
}

function mapStoreToProps(state: RootState) {
	return {
		items: state.items,
	};
}

export default connect(mapStoreToProps)(CreateField);

type CreateFieldProps = {
	type: String;
	dispatch: any;
};
