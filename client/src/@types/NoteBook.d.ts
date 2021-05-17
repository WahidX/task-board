export interface NoteBook {
	id: ID;
	name: string;
	cards: Card[];
	lastUpd: Date;
}
