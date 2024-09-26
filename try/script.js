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


function myOuter(){
  let outVariable = "bhargav Out";

  console.log(outVariable);
  // function myInner(){
  //   let innerVariable = "bhargav inner";
  //   console.log(innerVariable);
    
  // }
  return myOuter; 
}

const test = myOuter();
test;





















