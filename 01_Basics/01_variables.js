const accountId=123456
let accountEmail= "gulam@gmail.com"
var accountPassword= "12345678"
accountCity= "vadodara"
let accountState;       //undefined

//accountId=2      // not allowed
console.log(accountId);

accountEmail="mustafa@gmail.com"    // allowed
accountPassword="3456789"           // allowed
accountCity="Ahmedabad"             // allowed

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var, use let and const instead
because var is function scoped and can be redeclared, which can lead to unexpected behavior.
*/


