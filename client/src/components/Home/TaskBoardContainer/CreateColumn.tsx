import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import {
	Box,
	Input,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { Column } from "../../../@types/TaskBoard";
import { addColumn } from "../../../actions/notebook";
import { RootState } from "../../../store";
import { setToast, toastStatus } from "../../shared/Toast";

function CreateColumn(props) {
	const [columnName, setColumnName] = useState("");
	const initialFocusRef = useRef();

	let handleAddColumn = (onClose: Function) => {
		let allColumnNames: string[] = props.app.currentItem.columns.map(
			(column: Column) => column.name
		);

		if (columnName.trim().length !== 0) {
			if (allColumnNames.indexOf(columnName.trim()) === -1) {
				props.dispatch(addColumn(columnName.trim(), props.app.currentItem.id));
				setToast("New Column Added", toastStatus.success);
				onClose();
			} else {
				setToast("Name already present", toastStatus.error);
			}
		} else {
			setToast("Invalid Name", toastStatus.error);
		}
	};

	return (
		<Box p="30px">
			<Popover initialFocusRef={initialFocusRef}>
				{({ isOpen, onClose }) => (
					<>
						<PopoverTrigger>
							<Button
								borderRadius="lg"
								fontSize="md"
								p="5"
								border="dashed 1px grey"
								// onClick={handleAddColumn}
							>
								<AddIcon />
								<Text>Add Column</Text>
							</Button>
						</PopoverTrigger>

						<PopoverContent>
							<PopoverArrow />
							<PopoverCloseButton />
							<PopoverHeader>Column Name</PopoverHeader>
							<PopoverBody>
								<Input
									type="text"
									ref={initialFocusRef}
									value={columnName}
									onChange={(e) => setColumnName(e.target.value)}
									onKeyDown={(e) => e.key === "Enter" && handleAddColumn(onClose)}
								/>
							</PopoverBody>
						</PopoverContent>
					</>
				)}
			</Popover>
		</Box>
	);
}

function mapStoreToProps(state: RootState) {
	return {
		app: state.app,
	};
}

export default connect(mapStoreToProps)(CreateColumn);
