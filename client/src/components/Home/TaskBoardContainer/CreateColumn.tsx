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
	useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { Column, TaskBoard } from "../../../@types/TaskBoard";
import { addColumn } from "../../../actions/notebook";
import { RootState } from "../../../store";
import { setToast, toastStatus } from "../../shared/Toast";

function CreateColumn(props) {
	let item: TaskBoard = props.item;
	const [columnName, setColumnName] = useState("");
	const { onOpen, onClose, isOpen } = useDisclosure(true);
	const initialFocusRef = useRef();

	let handleAddColumn = () => {
		let allColumnNames: string[] = item.columns.map((column: Column) => column.name);

		if (columnName.trim().length !== 0) {
			if (allColumnNames.indexOf(columnName.trim()) === -1) {
				props.dispatch(addColumn(columnName.trim(), item.id));
				onClose();
				setToast("New Column Added", toastStatus.success);
				setColumnName("");
			} else {
				setToast("Name already present", toastStatus.error);
			}
		} else {
			setToast("Invalid Name", toastStatus.error);
		}
	};

	return (
		<Box p="30px">
			<Popover initialFocusRef={initialFocusRef} isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
				<PopoverTrigger>
					<Button borderRadius="lg" fontSize="md" p="5" border="dashed 1px grey">
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
							onKeyDown={(e) => e.key === "Enter" && handleAddColumn()}
						/>
					</PopoverBody>
				</PopoverContent>
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
