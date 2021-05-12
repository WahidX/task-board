interface TaskBoard {
	id: ID;
	name: String;
	columns: Column[];
	lastUpd: Date;
}

interface Column {
	name: String;
	cards: Card[];
}
