console.log('hello world');


// for (i = 0; i < 20; i++) { 

// 	//1. create a div elelemt 
// 	let element = document.createElement("div");
// 	let rotation = i *5;
// 	let width = i *30; 

// 	let hue = i * 10; 
// 	//2. add a class name 'rect' to the elememtn 
// 	element.classList.add('rect');
// 	element.style.backgroundColor = "hsl("+ hue + ",100%, 50%)";
// 	element.style.transform = "rotate(" + rotation+ "deg)";
// 	element.style.width = width + "px";


// 	//append the element to document 
// 	document.querySelector(".container").appendChild(element);

// } 

for (j = 0; j< 20; j++) {
console.log("a new j begins" + j);

for (i = 0; i < 10; i++) {
	console.log("j:" + j, "i" + i ); 
	let element = document.createElement("div"); 
	element.classList.add("rect");
	document.querySelector(".container").appendChild(element);

	if ( i == 5 ) {
		element.style.borderRadius = "20px";
	}
	
	if ( i > 6) {
		element.style.backgroundColor = "blue"; 
	}
	else {
		element.style.backgroundColor = "hsl(" + i * 10 + ", 100%, 50%)";
	}
}
let breaker = document.createElement("div");
breaker.classList.add("clear");
document.querySelector(".container").appendChild(breaker);

}