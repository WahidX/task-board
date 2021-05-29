import React, { useState } from "react";
import { connect } from "react-redux";
import { Box, GridItem, Input, Text, Textarea } from "@chakra-ui/react";
import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
	Modal,
	ModalContent,
	ModalOverlay,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
} from "@chakra-ui/modal";
import { DeleteIcon, StarIcon, AddIcon } from "@chakra-ui/icons";

import { RootState } from "../../store";
import { addCard } from "../../actions/notebook";
import { AppMode } from "../../reducers/app";
import { v1 } from "uuid";

const defaultCard = {
	title: "",
	description: "",
};

function CreateCard(props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [card, setCard] = useState(defaultCard);

	let resetCard = () => {
		setCard(defaultCard);
	};

	let createCardHandle = () => {
		let title = card.title.trim();
		let content = card.description.trim();
		if (title.length === 0) return;

		props.dispatch(
			addCard(
				{
					id: v1(),
					title,
					content,
					hasTodo: false,
					parent: props.columnName ? props.app.currentItem.name : props.columnName,
					parentType: props.columnName ? AppMode.taskboard : AppMode.notebook,
					timestamp: new Date(),
				},
				props.app.currentItem,
				props.columnIndex
			)
		);
		resetCard();
		onClose();
	};

	return (
		<GridItem w={props.columnName ? "" : "100%"} borderRadius="lg">
			<Box
				id="create-card-btn"
				onClick={(e) => {
					e.stopPropagation();
					onOpen();
				}}
				textAlign="center"
			>
				{props.app.mode === AppMode.notebook ? (
					<>
						<AddIcon />
						<Text>Create New</Text>
					</>
				) : (
					<IconButton aria-label="create card" variant="ghost">
						<AddIcon />
					</IconButton>
				)}
			</Box>

			<Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<Input
							fontSize="2xl"
							w="95%"
							placeholder="title"
							value={card.title}
							onChange={(e) => setCard({ ...card, title: e.target.value })}
						/>
					</ModalHeader>
					<ModalCloseButton />

					<ModalBody>
						<Textarea
							resize="vertical"
							placeholder="Content"
							value={card.description}
							onChange={(e) => setCard({ ...card, description: e.target.value })}
						/>
					</ModalBody>

					<ModalFooter justifyContent="space-between">
						<IconButton left="0" aria-label="fav-todo">
							<DeleteIcon onClick={resetCard} />
						</IconButton>

						<IconButton aria-label="fav-todo">
							<StarIcon />
						</IconButton>
						<Button onClick={createCardHandle} aria-label="create card">
							Create
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</GridItem>
	);
}

function mapStoreToProps(state: RootState) {
	return {
		app: state.app,
	};
}

export default connect(mapStoreToProps)(CreateCard);
