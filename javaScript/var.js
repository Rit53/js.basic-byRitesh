const accountId= 14453; 
let accountEmail="ritesh1234@gmail.com"
var accountPassword= "12345"
accountCity= "Delhi"

let accountAddress // undefined

// accountId=2  // not allowed

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])

/*
  Prefer not to Use Var
  Because of issue in block scope and functional scope
*/