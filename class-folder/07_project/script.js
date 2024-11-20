// 1.Vovale and consonent

// let str = prompt("Enter anyn string:");
// alfa = str.toLocaleLowerCase();
// let c=0,ele=0;
// let strLen = str.length;
// console.log(`My string length is ${strLen}`);

// for(let i =0; i <= strLen; i++ )
// {
//   if(alfa[i] === 'a' || alfa[i] === 'e' || alfa[i] === 'i' || alfa[i] === 'o' || alfa[i] === 'u')
// {
//   c++;

// }
// else
// {
//   ele++; 
// }

// }
// console.log(`Vovel number is ${c}`);
// console.log(`consonent number is ${ele}`);



// 2. prime number 
// let num = parseInt(prompt("Enter a number:"));

// function isPrime(n) {
//     if (n <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) { //(n * n)
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// if (isPrime(num)) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }


//  3.Strings - Convert Ended
// let str = prompt("Enter any string:");
// console.log(str);

// let str1 = ""; 
// let N = str.length;
// console.log(`My string length is ${N}`);

// function convertStr(N, str) {
//   for (let i = 0; i < N; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//       str1 += str[i].toUpperCase(); 
//     } else {
//       str1 += str[i].toLowerCase();
//     }
//   }
//   return str1; 
// }

// let result = convertStr(N, str);
// console.log(result);

// 5. palindrom
// function checkPalindrome(str) {
//   let length = str.length;
//   for (let i = 0; i < length / 2; i++) {
    
//       if (str[i] !== str[length - 1 - i]) {
         
//           return false;
//      }
//   }

//   return true;
// }
// let str = "racecar";
// console.log(checkPalindrome(str)); 








