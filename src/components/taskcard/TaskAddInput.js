import React from "react";
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({
	inputText,
	taskList,
	setInputText,
	setTaskList,
}) => {
	const handleChange = (e) => {
		setInputText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Add Task
		if (inputText.trim() === "") {
			setInputText("");
			return;
		}

		const taskId = uuid();

		setTaskList([
			{
				id: taskId,
				draggableId: taskId,
				text: inputText,
			},
			...taskList,
		]);
		setInputText("");
	};

	return (
		<div className="taskAddInput">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					maxLength="30"
					placeholder="add a task"
					onChange={handleChange}
					value={inputText}
				/>
			</form>
		</div>
	);
};
