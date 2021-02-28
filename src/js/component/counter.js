import React from "react";
import PropTypes from "prop-types";

export function Counter(props) {
	return (
		<div id="fondo">
			<div className="p-2 bg-dark text-success m-1 d-flex justify-content-center align-items-center">
				<h3>{props.number}</h3>
			</div>
		</div>
	);
}

Counter.propTypes = {
	number: PropTypes.number
};
