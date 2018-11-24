// File: dom.js

function buildPage() {
	var main = document.createElement("main");
	document.body.appendChild(main);

	var heading = document.createElement("h2");
	var headingText = document.createTextNode("DOM - Manipulation Using createElement, appendChild, insertBefore, removeChild, etc.");
	heading.appendChild(headingText);
	main.appendChild(heading);

	var intro = document.createElement("h1");
	var introText = document.createTextNode("This entire webpage was created utilizing DOM manipulation.");
	intro.appendChild(introText);
	main.appendChild(intro);

	var intro2 = document.createElement("h3");
	var intro2Text = document.createTextNode("How neat is that?!");
	intro2.appendChild(intro2Text);
	main.appendChild(intro2);

	var image = document.createElement("img");
	image.setAttribute("src", "neat.jpg");
	image.setAttribute("id", "image");
	image.setAttribute("width", "30%");
	main.appendChild(image);

	var pDiv = document.createElement("div");
	pDiv.setAttribute("id", "parent");
	main.appendChild(pDiv);

	var p1 = document.createElement("p");
	p1.setAttribute("id", "p1");
	var p1Text = document.createTextNode("By utilizing DOM manipulation, we can dynamically change the way a website works by the push of a button or input selection and we can even create a whole webpage just by using DOM as well. It has great utility value!");
	p1.appendChild(p1Text);
	pDiv.appendChild(p1);

	var p2 = document.createElement("p");
	p2.setAttribute("id", "p2");
	var p2Text = document.createTextNode("Plus, DOM manipulation can even add or remove elements from the webpage at the push of a button!");
	p2.appendChild(p2Text);
	pDiv.appendChild(p2);

	var p3 = document.createElement("p");
	p3.setAttribute("id", "p3");
	var p3Text = document.createTextNode("Push the buttons down below to either add in new paragraphs or you can remove the paragraphs too. Go ahead, try it out!");
	p3.appendChild(p3Text);
	pDiv.appendChild(p3);

	var p4 = document.createElement("p");
	p4.setAttribute("id", "p4");
	var p4Text = document.createTextNode("You can even choose where you want the manipulation to take place within the code.");
	p4.appendChild(p4Text);
	pDiv.appendChild(p4);

	var buttonDiv = document.createElement("div");
	buttonDiv.setAttribute("id", "buttons");
	main.appendChild(buttonDiv);

	var addButton = document.createElement("button");
	addButton.setAttribute("class", "myButtons");
	addButton.setAttribute("type", "button");
	addButton.setAttribute("onclick", "addElement()");
	var addButtonText = document.createTextNode("Add Element");
	addButton.appendChild(addButtonText);
	buttonDiv.appendChild(addButton);

	var removeButton = document.createElement("button");
	removeButton.setAttribute("class", "myButtons");
	removeButton.setAttribute("type", "button");
	removeButton.setAttribute("onclick", "removeElement()");
	var removeText = document.createTextNode("Remove Element");
	removeButton.appendChild(removeText);
	buttonDiv.appendChild(removeButton);

	var reset = document.createElement("button");
	reset.setAttribute("class", "myButtons");
	reset.setAttribute("type", "button");
	reset.setAttribute("onclick", "location.reload()");
	var resetText = document.createTextNode("Reset");
	reset.appendChild(resetText);
	buttonDiv.appendChild(reset);

	var home = document.createElement("button");
	home.setAttribute("class", "myButtons");
	home.setAttribute("type", "button");
	home.setAttribute("onclick", "window.location.href='../index.html'");
	var homeText = document.createTextNode("Home");
	home.appendChild(homeText);
	buttonDiv.appendChild(home);
}

function addElement() {
	var paragraph = document.createElement("p");
	paragraph.setAttribute("id", "p5");
	var text = document.createTextNode("This paragraph has been newly inserted.");
	paragraph.appendChild(text);

	var parent = document.getElementById("parent");
	var child = document.getElementById("p4");
	parent.insertBefore(paragraph, child);
}

function removeElement() {
	var parent = document.getElementById("parent");
	var child = document.getElementById("p5");
	parent.removeChild(child);
}