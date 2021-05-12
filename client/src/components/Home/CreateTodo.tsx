import React, { useState } from "react";
import { Box, GridItem, Input, Text, Textarea } from "@chakra-ui/react";
import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Modal, ModalContent, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/modal";
import { DeleteIcon, StarIcon, AddIcon } from "@chakra-ui/icons";

function CreateTodo(props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [card, setCard] = useState({
		title: "",
		description: "",
	});

	let resetCard = () => {
		setCard({
			title: "",
			description: "",
		});
	};

	return (
		<GridItem border="solid 1px grey" w="100%" borderRadius="lg" p="2">
			<Box onClick={onOpen} textAlign="center">
				<AddIcon />
				<Text>Create New</Text>
			</Box>

			<Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<Input fontSize="2xl" w="95%" placeholder="title" value={card.title} onChange={(e) => setCard({ ...card, title: e.target.value })} />
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
						<Button aria-label="delete-todo">Create</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</GridItem>
	);
}

export default CreateTodo;
