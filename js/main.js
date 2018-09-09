

// 4 Arrays

var firstArray = ["this", "is", "my", "1st", "array"];
var numArray = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11];
var mixedArray = ["Confused", 56, false, "maybe?", true, 8374];

console.log();




// 5 .length what is it? How to use it? when to use it?

firstArray.length
numArray.length
mixedArray.length





// 6 How do we access the first item in an array?

firstArray[0]
firstArray[1]
mixedArray[2]





// 7 How do you log to the console 0 – 100 in increments of 5? Can you do it without adding 5 to i each time the loop runs?

for(i=0; i<=100; i = i +5) {
	console.log(i);
}

for(i=0; i<=100; i++) {
	if (i % 5 == 0) {
		console.log(i);
	}
}




// 8 In a for loop which uses a variable, i, as an iterator, how can we use i to log every item in an array to the console?

for(i=0; i<firstArray.length; i++) {
	console.log(firstArray[i]);
}





// 9 When using a for loop to loop through an array, what is our terminating condition (what makes the loop stop running)?


for(i=0; i < mixedArray.length; i++) {
	if (mixedArray[i] == "maybe?") {
		console.log(mixedArray[i])
		break;
	}
}



// 10 In “document.getElementById()”, what is the document?

// Its the document object (DOM) https://www.google.com/search?biw=1242&bih=614&tbm=isch&sa=1&ei=4tOUW9yRDtCAk-4Pu4u7kAI&q=dom+tree+js&oq=dom+tree+js&gs_l=img.3..0i24.2517.4547..4666...0.0..0.87.548.8......1....1..gws-wiz-img.......0j0i67j0i30j0i5i30j0i8i30.8-fnxu778Q8#imgrc=r76gGnYKlUvt5M:





// 11 How would you store three sets of data with all the same properties, but different values (for example, three cars, each with a make, model, and color property, but different values for each property)?


var myObject = [
	{
		make: "Ford",
		model: "F-150",
		color: "Blue"
	},

	{
		make: "Kia",
		model: "Soul",
		color: "Black"
	},

	{
		make: "Tesla",
		model: "Model-S",
		color: "Titanium Blue"
	}
];





// 12 What is wrong with this code: document.getElementByID(“intro”) ?



// 13 Can you store objects in an array? Can you store arrays in an array? Can you store arrays in object properties? Can you store objects in object properties? 

var crazyObject = [
	{
		array: ["blue", "red", "white"],
		object: {
			color: "blue",
			ugly: true
		},
		newArray: [1, 5, [1, 5, 6, 7], "hello", ["we", "can", "do it"], false]
	}
];




// 14 If we have a “student” object with a name property and an age property, how can we access the student’s name to log it to the console?

var studentObject = {
	name: "Marcus",
	age: "26"
};

console.log(studentObject.name);

// var newPrompt = prompt("What is the students name?");

// if (newPrompt == studentObject.name) {
// 	console.log("Welcome " + studentObject.name)
// }





// 15 Why might we loop through an array?


// 16 Why might we loop through an array of objects?


// 17 What properties can we use to access or assign what text is contained in a text element from JavaScript?

.textContent 
.innerText





// 18 What is wrong with this code? document.getElementById(“#profile”)






































