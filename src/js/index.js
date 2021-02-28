//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = -1;
setInterval(function() {
	counter6 += 1;

	if (counter6 === 10) {
		counter6 = 0;
		counter5 += 1;
	}

	if (counter5 === 10) {
		counter5 = 0;
		counter4 += 1;
	}

	if (counter4 === 10) {
		counter4 = 0;
		counter3 += 1;
	}

	if (counter3 === 10) {
		counter3 = 0;
		counter2 += 1;
	}

	if (counter2 === 10) {
		counter2 = 0;
		counter1 += 1;
	}

	if (counter1 === 10) {
		counter1 = 0;
	}

	ReactDOM.render(
		<Home
			firstDigit={counter1}
			secondDigit={counter2}
			thirdDigit={counter3}
			fourthDigit={counter4}
			fifthDigit={counter5}
			sixthDigit={counter6}
		/>,
		document.querySelector("#app")
	);
}, 1000);
