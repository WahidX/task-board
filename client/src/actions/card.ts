import { Card } from "../@types/Card";
import { AppMode } from "../reducers/app";
import { UPDATE_CARD } from "./actionTypes";

export const updateCard = (card: Card, itemID: ID, index: number, mode: AppMode) => {
	return {
		type: UPDATE_CARD,
		card,
		index,
		itemID,
		mode,
	};
};
