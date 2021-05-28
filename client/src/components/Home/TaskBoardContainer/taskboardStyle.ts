import { ColorMode } from "@chakra-ui/color-mode";
import { DraggableProvidedDraggableProps } from "react-beautiful-dnd";

const grid = 8;

export const getListStyle = (isDraggingOver: Boolean): React.CSSProperties => ({
	background: isDraggingOver ? "#b0fbff" : "",
	padding: grid,
	colorScheme: "teal",
	width: 260,
	height: "68vh",
	borderRadius: "10px",
	color: "black",
	overflowY: "auto",
});

export const getItemStyle = (
	isDragging: Boolean,
	colorMode: ColorMode,
	draggableStyle: DraggableProvidedDraggableProps["style"]
): React.CSSProperties => ({
	// some basic styles to make the items look a bit nicer
	userSelect: "none",
	margin: `0 0 ${grid}px 0`,
	borderRadius: "10px",
	color: "black",
	// change background colour if dragging
	background: isDragging ? "teal" : "#d1d1d1",
	boxShadow: isDragging ? "0px 0px 5px 0px teal" : "",
	// styles we need to apply on draggables
	...draggableStyle,
});
