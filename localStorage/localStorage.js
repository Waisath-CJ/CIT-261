// File: localStorage.js

function reset() {
	window.localStorage.clear();
	location.reload();
}

function clickCount() {
	if (typeof(Storage) !== "undefined") {
		if (localStorage.clickcount) {
			localStorage.clickcount = Number(localStorage.clickcount) + 1;
		} else {
			localStorage.clickcount = 1;
		}

		document.getElementById("localResult").innerHTML = "Local Storage Count: " + localStorage.clickcount + " click(s)";
	} else {
		document.getElementById("localResult").innerHTML = "Error: Your browser does not support local storage.";
	}

	if (typeof(Storage) !== "undefined") {
		if (sessionStorage.clicks) {
			sessionStorage.clicks = Number(sessionStorage.clicks) + 1;
		} else {
			sessionStorage.clicks = 1;
		}

		document.getElementById("sessionResult").innerHTML = "Session Storage Count: " + sessionStorage.clicks + " click(s)";
	} else {
		document.getElementById("sessionResult").innerHTML = "Error: Your browser does not support local storage.";
	}
}

function createPerson() {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var birthday = document.getElementById("birthday").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;

	var person = {firstName: firstName, lastName: lastName, birthday: birthday, email: email, phone: phone};

	localStorage.setItem('user', JSON.stringify(person));
	localStorage.setItem('browser-name', navigator.appCodeName);
	localStorage.setItem('browser-version', navigator.appVersion);
	localStorage.setItem('browser-cookies', navigator.cookieEnabled);

	sessionStorage.setItem('user', JSON.stringify(person));
	sessionStorage.setItem('browser-name', navigator.appCodeName);
	sessionStorage.setItem('browser-version', navigator.appVersion);
	sessionStorage.setItem('browser-cookies', navigator.cookieEnabled);

	document.getElementById("userOutputLocal").innerHTML = "Submission successful.";
}

function showPerson() {
	var user = JSON.parse(localStorage.getItem('user'));
	var browserName = localStorage.getItem('browser-name');
	var browserVersion = localStorage.getItem('browser-version');
	var browserCookies = localStorage.getItem('browser-cookies');

	var user2 = JSON.parse(sessionStorage.getItem('user'));
	var browserName2 = sessionStorage.getItem('browser-name');
	var browserVersion2 = sessionStorage.getItem('browser-version');
	var browserCookies2 = sessionStorage.getItem('browser-cookies');

	document.getElementById("userOutputLocal").innerHTML = "Local Storage Output:" + "<br><b>First Name:</b> " + user.firstName + "<br><b>Last Name:</b> " + user.lastName 
		+ "<br><b>Birthday:</b>" + user.birthday + "<br><b>Email:</b> " + user.email + "<br><b>Phone:</b> " + user.phone + "<br><b>Browser Name:</b> " 
		+ browserName + "<br><b>Browser Version:</b> " + browserVersion + "<br><b>Browser Cookies Enabled:</b> " + browserCookies;

	document.getElementById("userOutputSession").innerHTML = "<br>Session Storage Output:" + "<br><b>First Name:</b> " + user2.firstName + "<br><b>Last Name:</b> " + user2.lastName 
		+ "<br><b>Birthday:</b>" + user2.birthday + "<br><b>Email:</b> " + user2.email + "<br><b>Phone:</b> " + user2.phone + "<br><b>Browser Name:</b> " 
		+ browserName2 + "<br><b>Browser Version:</b> " + browserVersion2 + "<br><b>Browser Cookies Enabled:</b> " + browserCookies2;
}