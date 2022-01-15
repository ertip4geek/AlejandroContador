import React, { useState, useEffect } from "react";

function Timer() {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		counter >= 0 && setTimeout(() => setCounter(counter + 1), 1000);
	}, [counter]);

	return (
		<div className="app">
			<h1>Alejandro Contador</h1>
			<div className="clock">
				<h2>
					<i className="far fa-clock"></i>
					{counter}
				</h2>
			</div>
		</div>
	);
}

export default Timer;
