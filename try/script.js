// console.log("Bhargav");
// node -v,nod script.js

// console.log(a);
// var a=10;  undefined

// console.log(a);
// let a=10;  ReferenceError: Cannot access 'a' before initialization

// console.log(a);
// let a;
// a=10; ReferenceError: Cannot access 'a' before initialization

// let a;
// console.log(a);
// a=10; undefined

// var a;
// console.log(a);
// a=10; undefined

// console.log(a);
// var a;
// a=10; undefined

// let b=5;
// let a=10;
// let c="bhargav";

// console.log(b+a+c);

// console.log(typeof(b));
// console.log(typeof(a));

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(0.1 + 0.2 === 0.3);
// console.log(123>23>2);

// console.log(+false);

// console.log(typeof Boolean);

// console.log(0 == false);

// console.log("0" == []);

// console.log(0 == []);
// console.log("0"==0);


// const green = function(a,b){
//   return a+b;
// }
// console.log(green(2,3));



// function myfun(a,b){
//   console.log(a+b);
// }

// myfun(2,3);
// myfun(2,3,5);

// function myfun(a,b,c){
//   console.log(a+b+c); 
// }


// function myFunction(weekName) {

//   switch (weekName) {
//     case 1:
//       console.log("mon");
      
//       break;

//     case 2:
//       console.log("tue");
      
//       break;

//     case 3:
//       console.log("wen");
      
//       break;

//     case 4:
//       console.log("thu");
      
//       break;

//     case 5:
//       console.log("fri");
      
//       break;

//     case 6:
//       console.log("sat");
      
//       break;

//     case 7:
//       console.log("sun");
      
//       break;

//     default:
//       console.log("Choice Wrong...");  
//       break;
//   }
// }
// console.log(myFunction(5));


// function myOuter(){
//   let outVariable = "bhargav Out";

//   console.log(outVariable);
  // function myInner(){
  //   let innerVariable = "bhargav inner";
  //   console.log(innerVariable);
    
  // }
  // return myOuter; 
// }

// const test = myOuter();
// test;

// console.log("%c Hello world","backgroud-color:red; color:white; font-size:40px;");

// console.log(arr.length);

// for(let i=0;i< arr.length;i++)
// {
//   if(i%2==0)
//   {
//     console.log(arr[i]);
//   }
// }

// let arr = [10,20,30,40,50];
// let b= arr.filter(num =>num % 2 != 0);

// console.log(b);

// let arr= new Array(1,2,3,4,5);
// let num = arr.map(a=> a+2);
// console.log(num);

// let arr= new Array(1,2,3,4,5);
// let num = arr.filter(a=> a%2==0);
// console.log(num);


// let arr= new Array(1,2,3,4,5);
// let num = arr.forEach(a=>console.log( a%2==0?a:""));
// console.log(num);

// function xyz(a,b){
//  return sum=a+b;
// }
// console.log(xyz(5,5));


const obj = {
  name: "amay",
  age:40,
  add: "navsari",
  spek(){
    console.log(`My Name: ${this.name} age is: ${this.age} address is: ${this.add}`);
  }
}
obj.spek()



// const xyz=function (a,b){
//   return sum=a+b;
// }
//  let byz = xyz(5,5);
//  console.log(byz);


// const xyz=(a,b)=>{
//   return sum=a+b;
// }
// let byz = xyz(5,5);
//  console.log(byz);
 


