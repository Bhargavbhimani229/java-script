let userName = prompt("Enter your name:");
console.log(userName);


let isname = document.getElementById('isname');
isname.innerHTML = userName;

let num1 = parseInt(prompt("Enter a Frist number:"));
let num2 = parseInt(prompt("Enter a Second number:"));

if (!(num1 == num1) || (!(num2 == num2))) 
{
  alert(`Invalid Number......!`);
}
else {
  console.log(num1);
  console.log(num2);

  let calcu = document.getElementById('calcu');
  calcu.innerHTML = `num 1 is: ${num1}`;

  let calcu1 = document.getElementById('calcu1');
  calcu1.innerHTML = `num 2 is: ${num2}`;
  
  let numberChoice = parseInt(prompt("1 => + , 2 => - , 3 => * , 4 => /"));

  if (numberChoice === 1) {
    let addi = num1 + num2;
    console.log("Addition is:", addi);

    let opration = document.getElementById('opration');
    opration.innerHTML = `Addition is: ${addi}`;

  }
  else if (numberChoice === 2) {
    if (num1 > num2) {
      let sub = num1 - num2;
      console.log("Subraction is:", sub);

      let opration = document.getElementById('opration');
      opration.innerHTML = `Subraction is: ${sub}`;
    }
    else {
      alert("Your First number is small...!");
    }
  }
  else if (numberChoice === 3) {
    let mul = num1 * num2;
    console.log("Multiplication is:", mul);

    let opration = document.getElementById('opration');
    opration.innerHTML = `Multiplication is: ${mul}`;

  }
  else if (numberChoice === 4) {
    let div = num1 / num2;
    console.log("Division is:", div);

    let opration = document.getElementById('opration');
    opration.innerHTML = `Division is: ${div}`;
  }

}








