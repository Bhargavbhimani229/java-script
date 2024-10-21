// Dates

let myDate = new Date()
console.log(myDate.toString()); // Mon Oct 21 2024 18:43:08 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Mon Oct 21 2024
console.log(myDate.toLocaleString());// 10/21/2024, 6:44:02 PM
console.log(typeof myDate); // object

let myCreatedDate = new Date(2024 ,0,21);
console.log(myCreatedDate.toDateString());// Sun Jan 21 2024

let myCreatedDateOne = new Date("2024-02-22");
console.log(myCreatedDate.toLocaleString()); // 1/21/2024, 12:00:00 AM


let myTimeStamp = Date.now() // new thi pn thay
console.log(myTimeStamp);
console.log(myCreatedDateOne.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // 10

console.log(`${newDate.getMonth()+1} and the time is ${newDate.getDay()}`);

// newDate.toLocaleString('default',{
//   weekday:"long" 
// })
