import { EditIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import React, { Key } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { Card } from "../../@types/Card";
import { Column } from "../../@types/TaskBoard";
import { RootState } from "../../store";
import CreateCard from "./CreateCard";
import DNDCards from "./DNDCards";
import { getListStyle } from "./taskboardStyle";

function ColumnComponent(props) {
	let column: Column = props.column;

	return (
		<Draggable draggableId={`${column.name}`} key={column.name as Key} index={props.index}>
			{(provided) => (
				<Box margin="15px" {...provided.draggableProps} ref={provided.innerRef}>
					<Box
						fontSize="3xl"
						display="flex"
						justifyContent="space-between"
						{...provided.dragHandleProps}
						p="2"
					>
						{column.name}

						<Box>
							<IconButton aria-label="create card" size="sm" variant="ghost">
								<CreateCard columnIndex={props.index} columnName={column.name} />
							</IconButton>
							<IconButton aria-label="edit column name" size="sm" variant="ghost">
								<EditIcon />
							</IconButton>
						</Box>
					</Box>

					<Droppable droppableId={`${column.name}`} key={column.name} type="task">
						{(provided, snapshot) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
								style={getListStyle(snapshot.isDraggingOver)}
							>
								{column.cards.map((card: Card, index: number) => (
									<DNDCards card={card} key={card.id} index={index} />
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</Box>
			)}
		</Draggable>
	);
}

function mapStoreToProps(state: RootState) {
	return {
		app: state.app,
	};
}

export default connect(mapStoreToProps)(ColumnComponent);

interface ColumnComponentProps {
	column: Column;
}
