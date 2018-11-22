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
function array() {
	var arrayMax = parseInt(prompt("How many numbers would you like in your array?"));

	if (isNaN(arrayMax)) {
		document.getElementById("arrayOutput").innerHTML = "Error: Invalid input. Please try again";
	} else {
		var list = createArray(arrayMax);
	}

	var sortArray = sort(list);
	var sumValue = addEnds(list);
	var midValue = getMiddle(list);
	var range = getRange(list);

	document.getElementById("arrayOutput").innerHTML = "Array of values: " + "[" + list + "]";
	document.getElementById("sumOutput").innerHTML = "Sum of the first and last values: " + sumValue;
	document.getElementById("midOutput").innerHTML = "Middle integer: " + midValue;
	document.getElementById("rangeOutput").innerHTML = "Range of values: " + range;
}

function createArray(arrayMax){
	var i = 0;
	var list = [];

	do {
		var inputArray = parseFloat(prompt("Enter an integer."));

		if (isNaN(inputArray)) {
			break;
		} else {
			list.push(inputArray);
			i++;
		}
	} while (i < arrayMax);

	return list;
}

function addEnds(list) {
	var firstValue = list[0];
	var lastValue = list[list.length - 1];
	
	var sum = firstValue + lastValue;

	return sum;
}

function getMiddle(list) {
	
}