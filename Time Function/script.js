// setTimeout()-----------------------------------------------------------------------------------------------------------
console.log("Welcome");
setTimeout(() => {
  console.log("done");

}, 2000);

// clearInterval() & setInterval() -----------------------------------------------------------------------------------------
// let c = 1;
// let myTime = setInterval(()=>{
//   console.log("Bhargav" , c);
//   c++;
//   if(c == 10){
//     c = 1;
//     console.log("Thank u👍");
//     clearInterval(myTime);
//   }
//   },500)

// let timeFun = document.getElementById('time-fun');
// let newFun = document.createElement('p');
// newFun.textContent = "Thank u👍";
// let c = 0;

// let intervalId = setInterval(() => {
//   c++;
//   let message = document.createElement('p');
//   message.textContent = `Message ${c}: Welcome 👍`;
//   timeFun.appendChild(message);
//   if (c == 10) {
//     c = 0;
//     clearInterval(intervalId);

//     setTimeout(() => {
//       timeFun.appendChild(newFun);
//     }, 500);
//   }
// }, 500);