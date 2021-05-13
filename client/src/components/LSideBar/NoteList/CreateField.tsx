import { IconButton } from "@chakra-ui/button";
import { CheckIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../../store";

function CreateField(props: CreateFieldProps) {
	const [name, setName] = useState("");

	let addItemHandle = () => {
		console.log("To be created : ", name);
	};

	return (
		<InputGroup>
			<Input type="text" aria-label="create-field" placeholder={`Enter ${props.type} name`} value={name} onChange={(e) => setName(e.target.value)} />
			<InputRightElement
				children={
					<IconButton aria-label={`create-field-${props.type}`} onClick={addItemHandle}>
						<CheckIcon color="green.500" />
					</IconButton>
				}
			/>
		</InputGroup>
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
	dispatch: Dispatch;
};
