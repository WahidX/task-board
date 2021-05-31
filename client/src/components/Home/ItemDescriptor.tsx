import { EditIcon } from "@chakra-ui/icons";
import { Badge, Box, Text } from "@chakra-ui/layout";
import {
	Button,
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
	let item: TaskBoard | NoteBook = props.item;
	let app: AppStore = props.app;
	let items: ItemStore = props.items;

	const [itemName, setItemName] = useState(item.name);
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => setItemName(item.name), [item.name]);

	let handleUpdateName = () => {
		let newName: string = itemName.trim();

		if (app.mode === AppMode.notebook) {
			if (items.notebooks[newName]) return;
		} else {
			if (items.taskboards[newName]) return;
		}

		// @ts-ignore
		props.dispatch(updateCurrentItemName(newName, item.id, app.mode));
		onClose();
	};

	if (props.item) {
		return (
			<>
				<Box>
					<Flex gridGap="5" alignItems="center">
						<Badge variant="solid" colorScheme="teal" borderRadius="md" fontSize="xl">
							{/* @ts-ignore */}
							{item.cards ? item.cards.length : item.columns.length}
						</Badge>

						<Text>{item.name}</Text>

						<IconButton aria-label="edit" size="sm" onClick={onOpen}>
							<EditIcon />
						</IconButton>
					</Flex>

					<Text fontSize="0.7em" cols={3}>
						{item.lastUpd.toUTCString()}
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

						<ModalBody>{item.description}</ModalBody>

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
