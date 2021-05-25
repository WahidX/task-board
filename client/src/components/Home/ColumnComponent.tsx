import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton, Input } from "@chakra-ui/react";
import React, { Key, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { Card } from "../../@types/Card";
import { Column } from "../../@types/TaskBoard";
import { editColumn } from "../../actions/notebook";
import { RootState } from "../../store";
import { setToast, toastStatus } from "../shared/Toast";
import CreateCard from "./CreateCard";
import DNDCards from "./DNDCards";
import { getListStyle } from "./taskboardStyle";

function ColumnComponent(props) {
	let column: Column = props.column;
	const [columnName, setColumnName] = useState(column.name);
	const [editting, setEditting] = useState(false);

	let columnNameChangeHandle = () => {
		// gathering all the column names
		let allColumnNames: string[] = props.app.currentItem.columns.map(
			(column: Column) => column.name
		);

		if (columnName.trim().length !== 0 && allColumnNames.indexOf(columnName.trim()) === -1) {
			props.dispatch(editColumn(props.app.currentItem.id, props.index, columnName));
			setEditting(false);
			setToast("Column name changed", toastStatus.success);
			return;
		}
		setToast("Column already exists", toastStatus.error);
	};

	return (
		<Draggable draggableId={`${column.name}`} key={column.name as Key} index={props.index}>
			{(provided) => (
				<Box margin="15px" {...provided.draggableProps} ref={provided.innerRef}>
					<Box
						fontSize="xl"
						display="flex"
						justifyContent="space-between"
						{...provided.dragHandleProps}
						p="2"
					>
						{editting && (
							<Input
								fontSize="xl"
								type="text"
								value={columnName}
								onChange={(e) => setColumnName(e.target.value)}
							/>
						)}

						{!editting && column.name}

						<Box>
							{editting ? (
								<HStack>
									<IconButton
										aria-label="create card"
										size="sm"
										variant="ghost"
										onClick={columnNameChangeHandle}
									>
										<CheckIcon />
									</IconButton>
									<IconButton
										aria-label="create card"
										size="sm"
										variant="ghost"
										onClick={() => setEditting(!editting)}
									>
										<CloseIcon />
									</IconButton>
								</HStack>
							) : (
								<HStack>
									<IconButton aria-label="create card" size="sm" variant="ghost">
										<CreateCard columnIndex={props.index} columnName={column.name} />
									</IconButton>
									<IconButton
										aria-label="edit column name"
										size="sm"
										variant="ghost"
										onClick={() => setEditting(!editting)}
									>
										<EditIcon />
									</IconButton>
								</HStack>
							)}
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
