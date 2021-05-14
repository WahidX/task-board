import { Checkbox } from "@chakra-ui/checkbox";
import { List, ListItem, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { connect } from "react-redux";
import { Todo } from "../../@types/Card";
import { RootState } from "../../store";
import CustomDivider from "../shared/CustomDivider";

function TodoContainer(props) {
	let todos: Todo = props.todo;

	return (
		<List w="100%">
			{todos.completed.map((todo) => (
				<ListItem>
					<Checkbox defaultIsChecked>{todo.content}</Checkbox>
				</ListItem>
			))}
			<CustomDivider width="10" />
			{todos.incompleted.map((todo) => (
				<ListItem>
					<Checkbox>{todo.content}</Checkbox>
				</ListItem>
			))}
		</List>
	);
}

function mapStoreToProps(state: RootState) {
	return {
		notebooks: state.items.notebooks,
	};
}

export default connect(mapStoreToProps)(TodoContainer);
