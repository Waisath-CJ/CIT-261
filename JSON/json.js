// File: json.js

function pullFile1() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "data1.json", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			var response = JSON.parse(xhr.responseText);
			var jsonDisplay = "";

			for (var i = 0; i < response.length; i++) {
				jsonDisplay += "<p>ID: " + response[i].id + "<br>First Name: " + response[i].first_name + "<br>Last Name: " + response[i].last_name 
					+ "<br>Gender: " + response[i].gender + "<br>Favorite Color: " + response[i].fav_color + "<br>Age: " + response[i].age;
			}
			document.getElementById("jsonOutput").innerHTML = jsonDisplay;

			var jsonString = JSON.stringify(response, null, 4);

			document.getElementById("jsonStringOutput").innerHTML = "<hr><p><b>JSON to a String</b></p><pre>" + jsonString + "</pre>";
		}
	}
	xhr.send();
}

function pullFile2() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "data2.json", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			var response = JSON.parse(xhr.responseText);
			var jsonDisplay = "";

			for (var i = 0; i < response.length; i++) {
				jsonDisplay += "<p>ID: " + response[i].id + "<br>First Name: " + response[i].first_name + "<br>Last Name: " + response[i].last_name 
					+ "<br>Relation: " + response[i].relation + "<br>Gender: " + response[i].gender + "<br>Age: " + response[i].age;
			}
			document.getElementById("jsonOutput").innerHTML = jsonDisplay;

			var jsonString = JSON.stringify(response, null, 4);

			document.getElementById("jsonStringOutput").innerHTML = "<hr><p><b>JSON to a String</b></p><pre>" + jsonString + "</pre>";
		}
	}
	xhr.send();
}