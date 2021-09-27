import React from "react";

export const TrafficLight = () => {
	const [on, setOn] = React.useState("");

	return (
		<div className="traffic-light container-fluid">
			<div
				onClick={() => setOn("red")}
				className={
					on === "red" ? "red-light light-on" : "red-light"
				}></div>
			<div
				onClick={() => setOn("yellow")}
				className={
					on === "yellow" ? "yellow-light light-on" : "yellow-light"
				}></div>
			<div
				onClick={() => setOn("green")}
				className={
					on === "green" ? "green-light light-on" : "green-light"
				}></div>
		</div>
	);
};
