import React from "react";

export const TaskCardDeleteButton = ({
	taskCardList,
	taskCard,
	setTaskCardList,
}) => {
	const taskCardDelete = (id) => {
		setTaskCardList(
			taskCardList.filter((singleTaskCard) => singleTaskCard.id !== id),
		);
	};

	return (
		<div
			className="taskCardDeleteButton"
			onClick={() => taskCardDelete(taskCard.id)}
		>
			<i className="fa-solid fa-circle-xmark"></i>
		</div>
	);
};
