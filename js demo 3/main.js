console.log ("hello world");

let fruits = ["apple","orange","pear", "grape", "stawberry", "kiwi"
  ];

fruits[3] = "banana"

let length = fruits.length; 

console.log(length)

for (i = 0; i < length; i++) {
  console.log(constructText(fruits[i]));
} 

function constructText(input) {
  
   let count = input.length;
  return "The word " + input + " has " + count + " characters ";
} 

