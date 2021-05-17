export interface TaskBoard {
	id: ID;
	name: string;
	description: string;
	columns: Column[];
	lastUpd: Date;
}

export interface Column {
	name: string;
	taskboard: string;
	cards: Card[];
}
