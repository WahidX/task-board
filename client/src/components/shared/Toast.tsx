import { createStandaloneToast } from "@chakra-ui/toast";

export enum toastStatus {
	success = "success",
	error = "error",
	info = "info",
	warning = "warning",
}

export const setToast = (message: String, status: toastStatus): void => {
	let toast = createStandaloneToast();

	toast({
		title: message,
		status,
		duration: 2500,
		isClosable: true,
	});
};
