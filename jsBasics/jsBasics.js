// File: jsBasics.js

function reset() {
	location.reload();
}

/////////////////////////////////////////////////////////////////////////////////

function multiples() {
	var printValue = "";
	var inputNumber = parseInt(document.getElementById("numInput").value);
	var outputSum = 0;

	if (inputNumber == 0) {
		printValue = "Please enter a number other than 0";
	}
	else if (inputNumber >= 1000) {
		printValue = "Please enter a number less than 1000";
	}
	else if (inputNumber <= -1000) {
		printValue = "Please enter a number greater than -1000";
	}
	else {
		for (var i = 1; i <= 15; i++) {
			outputSum = i * inputNumber;
			printValue += inputNumber + " x " + i + " = " + outputSum + "<br>";
		}
	}

	document.getElementById("numOutput").innerHTML = printValue;
}

/////////////////////////////////////////////////////////////////////////////////

function promptArray() {
	
}