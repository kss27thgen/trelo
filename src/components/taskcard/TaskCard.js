import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskAddInput } from "./TaskAddInput";
import { TaskCardDeleteButton } from "./TaskCardDeleteButton";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";

export const TaskCard = ({
	taskCard,
	index,
	taskCardList,
	setTaskCardList,
}) => {
	const [inputText, setInputText] = useState("");
	const [taskList, setTaskList] = useState([]);

	return (
		<Draggable draggableId={taskCard.id} index={index}>
			{(provided) => (
				<div
					className="taskCard"
					key={taskCard.id}
					{...provided.draggableProps}
					ref={provided.innerRef}
				>
					<div {...provided.dragHandleProps}>
						<TaskCardTitle />
					</div>
					<div className="taskCardBottom">
						<TaskCardDeleteButton
							taskCard={taskCard}
							taskCardList={taskCardList}
							setTaskCardList={setTaskCardList}
						/>
						<TaskAddInput
							inputText={inputText}
							setInputText={setInputText}
							taskList={taskList}
							setTaskList={setTaskList}
						/>
						{taskList.length > 0 && (
							<>
								<div className="separater"></div>
								<Tasks
									taskList={taskList}
									setTaskList={setTaskList}
								/>
							</>
						)}
					</div>
				</div>
			)}
		</Draggable>
	);
};
