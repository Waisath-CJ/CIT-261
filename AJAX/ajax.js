// File: ajax.js

function familyJSON(value) {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(this.responseText);

			var image = '<img src="' + response[value].pic + '">';

			var x = "";
			for (var i = 0; i < response[value].hobbies.length; i++) {
				x += "<li>" + response[value].hobbies[i] + "</li>";
			}

			document.getElementById("jsonHeader").innerHTML = response[value].name;
			document.getElementById("jsonPic").innerHTML = image;
			document.getElementById("jsonDetails").innerHTML = "Age: " + response[value].age + "<br>Sibling placement: " + response[value].sib_place +
				"<br>Hobbies: " + "<ul>" + x + "</ul>";

			var jsonString = JSON.stringify(response[value], null, 4);
			document.getElementById("jsonStringOutput").innerHTML = "<hr><p><b>JSON converted into a string</b></p><pre>" + jsonString + "</pre>";
		}
	}
	xhttp.open("GET", "family.json", true);
	xhttp.send();
}