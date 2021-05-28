import { Card } from "../@types/Card";
import { UPDATE_CARD } from "./actionTypes";

export const updateCard = (card: Card, index: number) => {
	return {
		type: UPDATE_CARD,
		card,
		index,
	};
};
