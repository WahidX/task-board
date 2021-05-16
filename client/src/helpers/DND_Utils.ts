import { Card } from "../@types/Card";
import { Column } from "../@types/TaskBoard";

export function reorder(list: (Card | Column)[], startIndex: number, endIndex: number) {
	const result: Array<Card | Column> = Array.from(list);

	if (startIndex !== endIndex) {
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
	}

	return result;
}

export function getColumnIndex(columns: Column[], targetName: String): [number, Card[]] {
	let columnIndex: number = 0;
	let newCardsArr: Card[] = columns.filter((column, index) => {
		if (column.name === targetName) {
			columnIndex = index;
			return true;
		}
	})[0].cards;
	return [columnIndex, newCardsArr];
}