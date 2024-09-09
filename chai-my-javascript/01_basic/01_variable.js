const accountId = 121212; // accountId =2 //not allowed
let accountEmail = "bhargav@123gmail.com";
var accountPassword = "123321";
accountCity = "Navsari";// it's bad habit
let accountState;

accountEmail = "bhargav@221gmail.com";
accountPassword="456654";
accountCity ="Surat";
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
