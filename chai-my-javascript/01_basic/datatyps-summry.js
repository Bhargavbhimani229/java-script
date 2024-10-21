// primitive memory adress copy ape che

// 7 types : number ,string ,booean ,symbol ,BigInt ,null ,undefind.

// Non-Primitive memory refrance ape 

// 3 type : Array ,Object ,Function

let userName = "Bhargav";
let age = 22;
let loggedIn = false;
let score = 234567876543234n;
let userEmail;
let outSidetem = null;
let id = Symbol('123');
let anotherId = Symbol('123');

console.table([userName, age, loggedIn, score, userEmail, outSidetem, id, anotherId]);

console.table([typeof (userName), typeof (age), typeof (loggedIn), typeof (score), typeof (userEmail), typeof (outSidetem), typeof (id), typeof (anotherId)])


const myArray = ["bhargav", "bhavini", "subham"];
console.log(myArray);

const myObj = {
  myname: "Bhargav",
  age: 20,
  city: "Navsari"
}
console.log(myObj);

const myFun = function () {
  console.log("Hello World");
}
myFun();

console.table([typeof (myArray), typeof (myObj), typeof (myFun)])


// stak (primitive) & heap (non-primitive)

// stak

let myName = "Bhargav Bhimani";

let myname1 = myName;
myname1 = "bhagu bhimani";

console.log(myName); // bhargav bhimani
console.log(myname1); // bhagu bhimani


// heap

let myYoutube = {
  id:"bhargav bhimani",
  pw:"bhargav@123"
}

let my = myYoutube;
my.id = "Bhagu bhimani"
console.log(myYoutube.id);





