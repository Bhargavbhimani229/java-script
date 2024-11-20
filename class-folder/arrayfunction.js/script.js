// // map ,filter, foreach, indexof, findindex ,includes, every, some

// // 1.map

// const myArry=[10,20,30,40,50]
// const myVariable = myArry.map((i)=>i+10)
// console.log(myVariable);

// // 2. filter

// const myFilter=[10,15,20,25,30]
// const myResult=myFilter.filter((num) => num % 2 === 0);
// console.log(myResult);

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const words = ['spr', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((word) => ((word.length > 6)||(word.length<4)));
// console.log(result);


// const array1 = ['a', 'b', 'c'];
// array1 = ['x','y','z'];
// console.log(array1);



// Sample array with simple foreach
// const numbers = [1, 2, 3, 4, 5];

// let x = [];

// function logger(number, ind) {
//   if (ind % 2 == 0) {
//     console.log(`Number+2 : ${number + 2} & index is : ${ind}`);
//   } else {
//     console.log(`Number+2 : ${number} & index is : ${ind}`);
//   }

// }

// numbers.forEach(logger);




// const numbers = [10, 20, 30, 40, 50];

// // Using forEach to log each number along with its index
// numbers.forEach((number, bhargav) => {
//   console.log(`Index: ${bhargav}, Number: ${number}`);
// });




// function number(element){
//   if(element>13){
//      return `number is: ${element}}`; 
//   }
// }

// console.log( `number is : ${array1[array1.findIndex(number)]}`);

// function number(array){
//   for(let i=0; i<array.length; i++){
//     if(array[i]>13){
//       console.log(`number is ${array[i]} at index ${i}`)
//       break;
//     }    
//   }
// }

// number(array1)
// const array1 = [5, 12, 8, 130, 44];
// const  number= array1.map((num)=>num*2);
// console.log(number);

// const array1 = [5, 12, 8, 130, 44];
// const str = array1.map((st) => st + "");
// console.log(str);

// const str1 = ['bhargav','SUBHAM','bhavini'];
// const n = str1.map((tr) => tr[0].toUpperCase()+tr.slice(1).toLowerCase());
// console.log(n);

// let arr=[1,20,15,60,53]
// let name = arr.filter((e) => e > 5 );
// console.log(name);

// peopleWhoBelongToTheIlluminati=[
//   { name: "Angelina Jolie", member: true },
//   { name: "Eric Jones", member: false },
//   { name: "Paris Hilton", member: true },
//   { name: "Kayne West", member: false },
//   { name: "Bob Ziroll", member: true }
// ];

// let name = peopleWhoBelongToTheIlluminati.filter((e) => (e.member === true) || (e.member === false));
// console.log(name);

// ofAge = [
//   { name: "Angelina Jolie", age: 80 },
//   { name: "Eric Jones", age: 2 },
//   { name: "Paris Hilton", age: 5 },
//   { name: "Kayne West", age: 16 },
//   { name: "Bob Ziroll", age: 100 }
// ]

// let name = ofAge.filter(e => e.age >18);
// console.log(name);


// let arr = ['bhargav','varj','bhavini']
// let num = arr.findIndex(e => e === 'varj');
// console.log(num);

let str = "Sam";
let bag = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] != 'S') {
    bag += str[i];
  }
}

console.log('N'+bag);



// #include<iostream>
// using namespace std;
// int main (){
//   cout<< "Hello World";
  
//   return 0;
// }
