import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { Task } from "../task/Task";

export const Tasks = ({ taskList, setTaskList, taskCard }) => {
	const reorder = (taskList, startIndex, endIndex) => {
		const remove = taskList.splice(startIndex, 1);
		taskList.splice(endIndex, 0, remove[0]);
	};

	const handleDragEnd = (result) => {
		console.log(result);
		reorder(taskList, result.source.index, result.destination.index);
	};

	return (
		<div className="tasks">
			<DragDropContext onDragEnd={handleDragEnd}>
				<Droppable droppableId={taskCard.id}>
					{(provided) => (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{taskList.map((task, index) => (
								<Task
									task={task}
									key={task.id}
									index={index}
									setTaskList={setTaskList}
									taskList={taskList}
								/>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};
