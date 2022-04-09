import React from "react";
import { v4 as uuid } from "uuid";

export const AddTaskCardButton = ({ taskCardList, setTaskCardList }) => {
	const addTaskCard = () => {
		const cardId = uuid();

		setTaskCardList([
			...taskCardList,
			{
				id: cardId,
				draggableId: cardId,
			},
		]);
	};

	return (
		<div className="addTaskCardButtonArea">
			<button onClick={addTaskCard}>
				<i className="fa-solid fa-plus"></i>
				<span>Add</span>
			</button>
		</div>
	);
};
