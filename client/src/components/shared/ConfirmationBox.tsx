import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogOverlay,
	Button,
} from "@chakra-ui/react";
import React from "react";

function ConfirmationDialog({ open, type, message, callback }: ConfirmationDialogProps) {
	// console.log(callback);

	let isOpen = open;
	// const onClose = () => setIsOpen(false);
	const cancelRef = React.useRef();

	let onClose = () => {
		isOpen = false;
	};

	return (
		<AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogBody fontSize="lg" fontWeight="bold">
						{message}
					</AlertDialogBody>

					<AlertDialogFooter>
						<Button
							ref={cancelRef}
							onClick={() => {
								onClose();
								callback(type, false);
							}}
						>
							Cancel
						</Button>
						<Button
							colorScheme="red"
							onClick={() => {
								onClose();
								callback(type, true);
							}}
							ml={3}
						>
							Confirm
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
}

interface ConfirmationDialogProps {
	open: boolean;
	message: string;
	type: string;
	callback: Function;
}

export default ConfirmationDialog;
