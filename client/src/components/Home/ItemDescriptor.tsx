import { EditIcon } from "@chakra-ui/icons";
import { Badge, Box, Text } from "@chakra-ui/layout";
import {
	Button,
	Editable,
	EditableInput,
	EditablePreview,
	Flex,
	IconButton,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NoteBook } from "../../@types/NoteBook";
import { AppStore, ItemStore } from "../../@types/Stores";
import { TaskBoard } from "../../@types/TaskBoard";
import { updateCurrentItemName } from "../../actions/app";
import { AppMode } from "../../reducers/app";
import { RootState } from "../../store";

function ItemDescriptor(props: ItemDescriptorProps) {
	useEffect(() => {}, [props.item.name]);
	const [itemName, setItemName] = useState(props.item.name);
	const { isOpen, onOpen, onClose } = useDisclosure();

	let handleUpdateName = () => {
		let newName: string = itemName.trim();

		if (props.app.mode === AppMode.notebook) {
			if (props.items.notebooks[newName]) return;
		} else {
			if (props.items.taskboards[newName]) return;
		}

		// @ts-ignore
		props.dispatch(updateCurrentItemName(newName));
		setItemName(props.item.name);
	};

	if (props.item) {
		return (
			<>
				<Box>
					<Flex gridGap="5" alignItems="center">
						<Badge variant="solid" colorScheme="teal" borderRadius="md" fontSize="xl">
							{/* @ts-ignore */}
							{props.item.cards ? props.item.cards.length : props.item.columns.length}
						</Badge>

						<Text>{props.item.name}</Text>

						<IconButton aria-label="edit" size="sm" onClick={onOpen}>
							<EditIcon />
						</IconButton>
					</Flex>

					<Text fontSize="0.7em" cols={3}>
						{props.item.lastUpd.toISOString()}
					</Text>
				</Box>

				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>
							<Input
								type="text"
								value={itemName}
								onChange={(e) => {
									setItemName(e.target.value);
								}}
							/>
						</ModalHeader>
						<ModalCloseButton />

						<ModalBody>{props.item.description}</ModalBody>

						<ModalFooter>
							<Button colorScheme="teal" mr={3} onClick={onClose}>
								Close
							</Button>
							<Button variant="ghost" onClick={handleUpdateName}>
								Update
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</>
		);
	} else return <Text fontSize="1.4em"> Open an Item </Text>;
}

interface ItemDescriptorProps {
	item: NoteBook | TaskBoard;
	app: AppStore;
	items: ItemStore;
}

let mapStoreToProps = (state: RootState) => {
	return {
		items: state.items,
		app: state.app,
	};
};

export default connect(mapStoreToProps)(ItemDescriptor);
