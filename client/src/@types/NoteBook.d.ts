export interface NoteBook {
	id: ID;
	description?: string;
	name: string;
	cards: Card[];
	lastUpd: Date;
}
