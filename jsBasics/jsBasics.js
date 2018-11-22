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

	document.getElementById("arrayOutput").innerHTML = "Array of values: " + "[" + sortArray + "]";
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

function sort(list) {
	var firstValue = 0;
	var lastValue = list.length - 1;

	for (var i = lastValue - 1; i >= firstValue; i--) {
		var swap = list[i];
		for (var j = i + 1; j <= lastValue; j++) {
			if (swap <= list[j]) {
				break;
			}
			list[j - 1] = j;
		}
		list[j - 1] = swap;
	}

	return list;
}

function addEnds(list) {
	var firstValue = list[0];
	var lastValue = list[list.length - 1];
	
	var sum = firstValue + lastValue;

	return sum;
}

function getMiddle(list) {
	var firstValue = 0;
	var arrayLength = list.length;
	var arrayMid = arrayLength / 2;

	if (arrayLength % 2 == 0) {
		var avgFirstValue = list[arrayMid-1];
		var avgLastValue = list[arrayMid];
		var avgMidValue = (avgFirstValue + avgLastValue) / 2;

		return avgMidValue;
	}
	else {
		var midValue = list[Math.floor(arrayMid)];
		return midValue;
	}
}

function getRange(list) {
	var firstValue = list[0];
	var lastValue = list[list.length - 1];
	var range = lastValue - firstValue;

	return range;
}

/////////////////////////////////////////////////////////////////////////////////
function favorites() {
	var favCity = document.getElementById("favCity").value;
	var favColor = document.getElementById("favColor").value;
	var favNumber = document.getElementById("favNumber").value;
	var favSport = document.getElementById("favSport").value;
	var favSuperhero = document.getElementById("favSuperhero").value;

	var associativeArray = {"city": favCity, "color": favColor, "number": favNumber, 
		"sport": favSport, "superhero": favSuperhero};

	document.getElementById("associativeArray").innerHTML = "<br>Your array: <br>{city: " + associativeArray["city"]
		+ ", color: " + associativeArray["color"] + ", number: " + associativeArray["number"] + ", sport: " 
		+ associativeArray["sport"] + ", superhero: " + associativeArray["superhero"] + "}";
}