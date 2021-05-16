const grid = 8;

export const getListStyle = (isDraggingOver: Boolean) => ({
	background: isDraggingOver ? "lightblue" : "lightgrey",
	padding: grid,
	width: 250,
	borderRadius: "10px",
});

export const getItemStyle = (isDragging: Boolean, draggableStyle) => ({
	// some basic styles to make the items look a bit nicer
	userSelect: "none",
	padding: grid * 2,
	margin: `0 0 ${grid}px 0`,
	borderRadius: "10px",
	// change background colour if dragging
	background: isDragging ? "teal" : "grey",

	// styles we need to apply on draggables
	...draggableStyle,
});
