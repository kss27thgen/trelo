import React, { useState } from "react";

export const TaskCardTitle = () => {
	const [isClick, setIsClick] = useState(false);
	const [inputCardTitle, setInputCardTitle] = useState("Card Title");

	const handleClick = () => {
		setIsClick(true);
	};

	const handleBlur = () => {
		setIsClick(false);
	};

	const handleChange = (e) => {
		setInputCardTitle(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsClick(false);
	};

	return (
		<section onClick={handleClick} className="taskCardTitleInputArea">
			{isClick ? (
				<form onSubmit={handleSubmit}>
					<input
						className="taskCardTitleInput"
						type="text"
						onChange={handleChange}
						onBlur={handleBlur}
						value={inputCardTitle}
						autoFocus
						maxLength={18}
					/>
				</form>
			) : (
				<h3 className="taskCardTitle">{inputCardTitle}</h3>
			)}
		</section>
	);
};
