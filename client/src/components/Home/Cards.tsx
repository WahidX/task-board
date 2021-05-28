import React, { useState } from "react";
import { connect } from "react-redux";
import { Box, GridItem, Input, Text, Textarea } from "@chakra-ui/react";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
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
import { DeleteIcon, StarIcon } from "@chakra-ui/icons";
import { Card } from "../../@types/Card";
import TodoContainer from "./TodoContainer";
import { updateCard } from "../../actions/card";
import { setToast, toastStatus } from "../shared/Toast";

function Cards(props) {
	let card: Card = props.card;
	const [newCard, setNewCard] = useState(card);
	const { isOpen, onOpen, onClose } = useDisclosure();

	let onSaveHandle = () => {
		if (newCard.title.trim().length === 0) return;
		props.dispatch(updateCard(newCard, props.index));
		onClose();
		setToast("Card updated", toastStatus.success);
	};

	return (
		<GridItem
			border="solid 1px grey"
			w="100%"
			borderRadius="lg"
			p="2"
			fontSize="md"
			key={props.card.id}
		>
			<Box onClick={onOpen} p="3">
				<Text>{card.title}</Text>
				<Text>{card.content}</Text>
			</Box>

			<Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<Input
							fontSize="2xl"
							w="95%"
							placeholder="title"
							value={newCard.title}
							onChange={(e) =>
								setNewCard((prevCard) => {
									return { ...prevCard, title: e.target.value };
								})
							}
						/>
					</ModalHeader>
					<ModalCloseButton />

					<ModalBody>
						<Textarea
							resize="vertical"
							placeholder="Content"
							value={newCard.content}
							rows={10}
							onChange={(e) =>
								setNewCard((prevCard) => {
									return { ...prevCard, content: e.target.value };
								})
							}
						/>

						{card.hasTodo && <TodoContainer todo={card.todo} />}
					</ModalBody>

					<ModalFooter>
						<ButtonGroup>
							<IconButton aria-label="delete todo">
								<DeleteIcon />
							</IconButton>

							<IconButton aria-label="fav todo">
								<StarIcon />
							</IconButton>

							<Button onClick={onSaveHandle} variant="solid" colorScheme="teal">
								Save
							</Button>
						</ButtonGroup>
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

export default connect(mapStoreToProps)(Cards);
