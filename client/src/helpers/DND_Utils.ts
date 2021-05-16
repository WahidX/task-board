import { Card } from "../@types/Card";

export default function reorder(list: Array<Card>, startIndex: number, endIndex: number) {
	const result = Array.from(list);

	if (startIndex !== endIndex) {
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
	}

	return result;
}
