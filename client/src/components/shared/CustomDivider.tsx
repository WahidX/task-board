import { Center, Divider } from "@chakra-ui/react";

export default function CustomDivider(props) {
	return (
		<Center height={`${props.width}px`}>
			<Divider orientation={props.orientation} />
		</Center>
	);
}
