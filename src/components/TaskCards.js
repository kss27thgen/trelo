import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { AddTaskCardButton } from "./AddTaskCardButton";
import { TaskCard } from "./taskcard/TaskCard";

export const TaskCards = () => {
	const [taskCardList, setTaskCardList] = useState([]);

	const reorder = (taskCardList, startIndex, endIndex) => {
		const remove = taskCardList.splice(startIndex, 1);
		taskCardList.splice(endIndex, 0, remove[0]);
	};

	const handleDragEnd = (result) => {
		if (result.destination === null) return;
		reorder(taskCardList, result.source.index, result.destination.index);
	};

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Droppable droppableId="droppable" direction="horizontal">
				{(provided) => (
					<div
						className="taskCardsWrap"
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						<AddTaskCardButton
							taskCardList={taskCardList}
							setTaskCardList={setTaskCardList}
						/>

						<div className="taskCards">
							{taskCardList.map((taskCard, index) => (
								<TaskCard
									key={taskCard.id}
									taskCard={taskCard}
									index={index}
									taskCardList={taskCardList}
									setTaskCardList={setTaskCardList}
								/>
							))}
						</div>

						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};
