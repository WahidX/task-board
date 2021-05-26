import { Badge, Box, Text } from "@chakra-ui/layout";
import { Editable, EditableInput, EditablePreview, Flex } from "@chakra-ui/react";
import React from "react";
import { NoteBook } from "../../@types/NoteBook";
import { TaskBoard } from "../../@types/TaskBoard";

function ItemDescriptor(props: ItemDescriptorProps) {
	console.log(props);
	if (props.item) {
		return (
			<Box>
				<Flex gridGap="3" alignItems="center">
					<Badge variant="solid" colorScheme="teal" borderRadius="md" fontSize="xl">
						{props.item.cards ? props.item.cards.length : props.item.columns.length}
					</Badge>

					<Editable
						defaultValue={props.item.name}
						colorScheme="teal"
						selectAllOnFocus={false}
						fontSize="1.4em"
					>
						<EditablePreview />
						<EditableInput />
					</Editable>
				</Flex>
				<Text fontSize="0.7em" cols={3}>
					{props.item.lastUpd.toISOString()}
				</Text>
			</Box>
		);
	} else return <Text fontSize="1.4em"> Open an Item </Text>;
}

export default ItemDescriptor;

interface ItemDescriptorProps {
	item: NoteBook | TaskBoard | undefined;
}
