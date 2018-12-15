// File: final.js

function reset() {
	window.localStorage.clear();
	location.reload();
}

function forwardSubmit() {
	var f1 = document.getElementById("forward1").value;
	var f2 = document.getElementById('forward2').value;

	var forwards = {f1: f1, f2: f2};

	localStorage.setItem('forwards', JSON.stringify(forwards));
}

function midfieldSubmit() {
	var m1 = document.getElementById("mid1").value;
	var m2 = document.getElementById('mid2').value;
	var m3 = document.getElementById("mid3").value;
	var m4 = document.getElementById('mid4').value;

	var midfield = {m1: m1, m2: m2, m3: m3, m4: m4};

	localStorage.setItem('midfield', JSON.stringify(midfield));
}

function defenseSubmit() {
	var d1 = document.getElementById("def1").value;
	var d2 = document.getElementById('def2').value;
	var d3 = document.getElementById("def3").value;
	var d4 = document.getElementById('def4').value;

	var defense = {d1: d1, d2: d2, d3: d3, d4: d4};

	localStorage.setItem('defense', JSON.stringify(defense));
}

function goalieSubmit() {
	var g1 = document.getElementById("g1").value;

	var goalie = {g1: g1};

	localStorage.setItem('goalie', JSON.stringify(goalie));
}

function inputF() {
	var fDiv = document.getElementById("inputDiv");

	var f1 = document.createElement("input");
	f1.setAttribute("id", "forward1");
	f1.setAttribute("type", "text");
	f1.setAttribute("placeholder", "Enter forward #1...");
	fDiv.appendChild(f1);

	var f2 = document.createElement("input");
	f2.setAttribute("id", "forward2");
	f2.setAttribute("type", "text");
	f2.setAttribute("placeholder", "Enter forward #2...");
	fDiv.appendChild(f2);

	var fSubmit = document.createElement("button");
	fSubmit.setAttribute("id", "submit");
	fSubmit.setAttribute("type", "button");
	fSubmit.setAttribute("onclick", "forwardSubmit()");
	var subText = document.createTextNode("Submit Forwards");
	fSubmit.appendChild(subText);
	fDiv.appendChild(fSubmit);
}

function inputM() {
	var mDiv = document.getElementById("inputDiv");

	var m1 = document.createElement("input");
	m1.setAttribute("id", "mid1");
	m1.setAttribute("type", "text");
	m1.setAttribute("placeholder", "Enter midfield #1...");
	mDiv.appendChild(m1);

	var m2 = document.createElement("input");
	m2.setAttribute("id", "mid2");
	m2.setAttribute("type", "text");
	m2.setAttribute("placeholder", "Enter midfield #2...");
	mDiv.appendChild(m2);

	var m3 = document.createElement("input");
	m3.setAttribute("id", "mid3");
	m3.setAttribute("type", "text");
	m3.setAttribute("placeholder", "Enter midfield #3...");
	mDiv.appendChild(m3);

	var m4 = document.createElement("input");
	m4.setAttribute("id", "mid4");
	m4.setAttribute("type", "text");
	m4.setAttribute("placeholder", "Enter midfield #4...");
	mDiv.appendChild(m4);

	var mSubmit = document.createElement("button");
	mSubmit.setAttribute("id", "submit");
	mSubmit.setAttribute("type", "button");
	mSubmit.setAttribute("onclick", "midfieldSubmit()");
	var subText = document.createTextNode("Submit Midfield");
	mSubmit.appendChild(subText);
	mDiv.appendChild(mSubmit);
}

function inputD() {
	var dDiv = document.getElementById("inputDiv");

	var d1 = document.createElement("input");
	d1.setAttribute("id", "def1");
	d1.setAttribute("type", "text");
	d1.setAttribute("placeholder", "Enter defense #1...");
	dDiv.appendChild(d1);

	var d2 = document.createElement("input");
	d2.setAttribute("id", "def2");
	d2.setAttribute("type", "text");
	d2.setAttribute("placeholder", "Enter defense #2...");
	dDiv.appendChild(d2);

	var d3 = document.createElement("input");
	d3.setAttribute("id", "def3");
	d3.setAttribute("type", "text");
	d3.setAttribute("placeholder", "Enter defense #3...");
	dDiv.appendChild(d3);

	var d4 = document.createElement("input");
	d4.setAttribute("id", "def4");
	d4.setAttribute("type", "text");
	d4.setAttribute("placeholder", "Enter defense #4...");
	dDiv.appendChild(d4);

	var dSubmit = document.createElement("button");
	dSubmit.setAttribute("id", "submit");
	dSubmit.setAttribute("type", "button");
	dSubmit.setAttribute("onclick", "defenseSubmit()");
	var subText = document.createTextNode("Submit Defense");
	dSubmit.appendChild(subText);
	dDiv.appendChild(dSubmit);
}

function inputG() {
	var gDiv = document.getElementById("inputDiv");

	var g = document.createElement("input");
	g.setAttribute("id", "g1");
	g.setAttribute("type", "text");
	g.setAttribute("placeholder", "Enter goalie...");
	gDiv.appendChild(g);

	var gSubmit = document.createElement("button");
	gSubmit.setAttribute("id", "submit");
	gSubmit.setAttribute("type", "button");
	gSubmit.setAttribute("onclick", "goalieSubmit()");
	var subText = document.createTextNode("Submit Goalie");
	gSubmit.appendChild(subText);
	gDiv.appendChild(gSubmit);
}

function createTeam() {
	var pDiv = document.createElement("div");
	pDiv.setAttribute("id", "output");
	document.getElementById('create').appendChild(pDiv);

	var forward = document.createElement("div");
	forward.setAttribute("id", "forward");
	forward.setAttribute("onclick", "inputF()");
	var forwardText = document.createTextNode("Pick your FORWARDS");
	forward.appendChild(forwardText);
	pDiv.appendChild(forward);

	var midfield = document.createElement("div");
	midfield.setAttribute("id", "midfield");
	midfield.setAttribute("onclick", "inputM()");
	var midfieldText = document.createTextNode("Pick your MIDFIELD");
	midfield.appendChild(midfieldText);
	pDiv.appendChild(midfield);

	var defense = document.createElement("div");
	defense.setAttribute("id", "defense");
	defense.setAttribute("onclick", "inputD()");
	var defenseText = document.createTextNode("Pick your DEFENSE");
	defense.appendChild(defenseText);
	pDiv.appendChild(defense);

	var goalie = document.createElement("div");
	goalie.setAttribute("id", "goalie");
	goalie.setAttribute("onclick", "inputG()");
	var goalieText = document.createTextNode("Pick your GOALIE");
	goalie.appendChild(goalieText);
	pDiv.appendChild(goalie);

	var inputDiv = document.createElement("div");
	inputDiv.setAttribute("id", "inputDiv");
	pDiv.appendChild(inputDiv);
}

function displayTeam() {
	var inputDiv = document.createElement("div");
	inputDiv.setAttribute("id", "displayDiv");
	document.getElementById("display").appendChild(inputDiv);

	var forwards = JSON.parse(localStorage.getItem('forwards'));
	var midfield = JSON.parse(localStorage.getItem('midfield'));
	var defense = JSON.parse(localStorage.getItem('defense'));
	var goalie = JSON.parse(localStorage.getItem('goalie'));

	document.getElementById("displayDiv").innerHTML = "<hr><h3>Forwards:</h3> " + forwards.f1 + ", " + forwards.f2
	+ "<br><h3>Midfield:</h3> " + midfield.m1 + ", " + midfield.m2 + ", " + midfield.m3 + ", " + midfield.m4
	+ "<br><h3>Defense:</h3> " + defense.d1 + ", " + defense.d2 + ", " + defense.d3 + ", " + defense.d4
	+ "<br><h3>Goalie:</h3> " + goalie.g1;
}