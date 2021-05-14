export interface TaskBoard {
	id: ID;
	name: String;
	description: String;
	columns: Column[];
	lastUpd: Date;
}

export interface Column {
	name: String;
	taskboard: String;
	cards: Card[];
}
