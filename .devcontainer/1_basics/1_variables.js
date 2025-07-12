const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 not allowed 

accountEmail = "kajal@gmail.com"
accountPassword = "123123"
accountCity = "delhi"

console.log((accountId));
console.table([accountId, accountEmail, accountPassword, accountCity])
// prefer not to use var because of issue in block scope and functional scope

            