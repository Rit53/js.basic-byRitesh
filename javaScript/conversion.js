let score = 33

console.log(typeof(score))

let scoreInString=String(score); // type conversion number to string

console.log(typeof(scoreInString))

// "33" =>33
// "33abc" => NaN
// true => 1; false=>0

let isLoggedIn=1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "ritesh" => true

let num= "22"

let val=Number(num)
console.log(val)
console.log(typeof(val))

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter)