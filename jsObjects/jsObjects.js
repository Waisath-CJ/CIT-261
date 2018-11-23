// File: jsObjects.js

var person = {
	firstName: "CJ",
	lastName: "Waisath",
	age: 21,
	hairColor: "blonde",
	city: "Rexburg",
	state: "Idaho",
	country: "USA",
	zip: 83440,
	fullName: function() {
		return this.firstName + " " + this.lastName;
	},
	contactInfo: function() {
		return this.city + ", " + this.state + " " + this.zip + " " + this.country;
	}
};

console.log("First Name: " + person.firstName);
console.log("Last Name: " + person.lastName);
console.log("Age: " + person["age"]);
console.log("Hair Color: " + person["hairColor"]);

console.log("Full Name: " + person.fullName());
console.log("Contact Info: " + person.contactInfo());

/////////////////////////////////////////////////////////////////////////////////////////

function People (first, last) {
	this.firstName = first;
	this.lastName = last;
	this.fullName = first + " " + last;
}

var father = new People("Curt", "Waisath");
var mother = new People("Karen", "Waisath");

console.log("My Dad: " + father.fullName);
console.log("My Mom: " + mother.fullName);

father.age = 52;
mother.age = 54;

console.log("My Dad's Age: " + father.age);
console.log("My Mom's Age: " + mother.age);