import { DeleteIcon, EditIcon, SettingsIcon, WarningIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Badge, Box, Text } from "@chakra-ui/layout";
import {
	Button,
	Flex,
	Input,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
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
import { NoteBook } from "../../../@types/NoteBook";
import { AppStore, ItemStore } from "../../../@types/Stores";
import { TaskBoard } from "../../../@types/TaskBoard";
import { updateCurrentItemName } from "../../../actions/app";
import { AppMode } from "../../../reducers/app";
import { RootState } from "../../../store";
import ConfirmationDialog from "../../shared/ConfirmationBox";
import { setToast, toastStatus } from "../../shared/Toast";

function ItemDescriptor(props: ItemDescriptorProps) {
	let item: TaskBoard | NoteBook = props.item;
	let app: AppStore = props.app;
	let items: ItemStore = props.items;

	const [itemName, setItemName] = useState(item.name);
	const { isOpen, onOpen, onClose } = useDisclosure();

	// for confirmation boxes
	const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
	const [openClearConfirm, setOpenClearConfirm] = useState(false);

	useEffect(() => setItemName(item.name), [item.name]);

	let handleUpdateName = () => {
		let newName = itemName.trim();

		// Have to find all notebook taskboard names
		console.log(items.notebooks[newName]);

		if (
			(app.mode === AppMode.notebook && items.notebooks[newName]) ||
			(app.mode === AppMode.taskboard && items.taskboards[newName])
		) {
			setToast("Name already exists", toastStatus.error);
			return;
		}

		if (newName.length === 0) {
			setToast("Name Can't be empty", toastStatus.error);
			return;
		}

		// @ts-ignore
		props.dispatch(updateCurrentItemName(newName, item.id, app.mode));
		onClose();
	};

	let confirmCallback = (type: string, confirmed: boolean) => {
		switch (type) {
			case "delete":
				console.log(type, confirmed);
				setOpenDeleteConfirm(false);
				break;
			case "clear-all":
				console.log(type, confirmed);
				setOpenClearConfirm(false);
				break;
		}
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

						<Menu>
							<MenuButton
								px={3}
								py={2}
								fontSize="sm"
								transition="all 0.2s"
								borderRadius="md"
								_hover={{ bg: "teal.700" }}
								_expanded={{ bg: "teal.400" }}
								_focus={{ boxShadow: "outline" }}
							>
								<SettingsIcon />
							</MenuButton>
							<MenuList>
								<MenuItem icon={<EditIcon />} onClick={onOpen}>
									Rename
								</MenuItem>

								<MenuDivider />

								<MenuItem
									icon={<WarningIcon color="yellow.600" />}
									onClick={() => {
										setOpenClearConfirm(true);
									}}
								>
									Clear All Items
								</MenuItem>
								<MenuItem
									icon={<DeleteIcon color="red.400" />}
									onClick={() => {
										setOpenDeleteConfirm(true);
									}}
								>
									Delete Item
								</MenuItem>

								{/* Confirmation Boxes */}
								<ConfirmationDialog
									type="clear-all"
									open={openClearConfirm}
									message="Are you sure?"
									callback={confirmCallback}
								/>
								<ConfirmationDialog
									type="delete"
									open={openDeleteConfirm}
									message="Are you sure?"
									callback={confirmCallback}
								/>
							</MenuList>
						</Menu>
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
