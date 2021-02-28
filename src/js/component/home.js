import React from "react";
import PropTypes from "prop-types";

import { Counter } from "./counter";

//create your first component
export function Home(props) {
	return (
		<div className="d-flex flex-row justify-content-center bg-success">
			<icon>
				<i className="fas fa-stopwatch fa-3x pt-2"></i>
			</icon>

			<Counter number={props.firstDigit} />
			<Counter number={props.secondDigit} />
			<Counter number={props.thirdDigit} />
			<Counter number={props.fourthDigit} />
			<Counter number={props.fifthDigit} />
			<Counter number={props.sixthDigit} />
		</div>
	);
}

Home.propTypes = {
	firstDigit: PropTypes.number,
	secondDigit: PropTypes.number,
	thirdDigit: PropTypes.number,
	fourthDigit: PropTypes.number,
	fifthDigit: PropTypes.number,
	sixthDigit: PropTypes.number
};
