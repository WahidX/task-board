import React from "react";
import { GridItem, Input, Text, Textarea } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Modal, ModalContent, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/modal";
import { DeleteIcon, StarIcon } from "@chakra-ui/icons";

function Cards(props) {
	let card = props.card;
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<GridItem border="solid 1px grey" w="100%" borderRadius="lg" p="2">
			<div onClick={onOpen}>
				<Text>{card.title}</Text>
				<Text>{card.description}</Text>
			</div>

			<Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<Input fontSize="2xl" w="95%" value={card.title} placeholder="title" />
					</ModalHeader>
					<ModalCloseButton />

					<ModalBody>
						<Textarea resize="vertical" placeholder="Content" value={card.description} />
					</ModalBody>

					<ModalFooter>
						<IconButton aria-label="delete-todo">
							<DeleteIcon />
						</IconButton>
						<IconButton aria-label="fav-todo">
							<StarIcon />
						</IconButton>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</GridItem>
	);
}

export default Cards;
