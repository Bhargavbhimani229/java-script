const name = "Bhargav";
const myRepo = 20;

console.log(`Hello My Name is ${name} and My git repo is ${myRepo}`);

// string declaration

// 1.  const name = "Bhargav";
// 2. const name = new String('bhargav');

const gameName = new String('bhargav-hh');

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

console.table([gameName[0],gameName.__proto__,gameName.length,gameName.toUpperCase(),gameName.charAt(4),gameName.indexOf('a')]);

const newString= gameName.substring(0, 4);
console.log(newString); // bhar

const anotherString = gameName.slice(-8,4);
console.log(anotherString); // ar

const newStringOne = "       bhargav      ";
console.log(newStringOne); //       bhargav    
console.log(newStringOne.trim()); // bhargav

const url = "https://bhargav.com/bhargav%20bhimani"
console.log(url.replace('%20','-'));

console.log(url.includes('bhargav')); // true
console.log(url.includes('shubham')); // false

console.log(gameName.split('-')); // ['bhargav','hh']








