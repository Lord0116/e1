//Task-1
console.log("this text is showing");

//Assigning the Variable

let a = 3;
let b = 5;
let c;

let output1 = `
let a = 3;
let b = 5;
let c;

a + b = ${a + b};
a - b = ${a - b};
a * b = ${a * b};
a / b = ${a / b};
a % b = ${a % b};
a += b = ${(a += b)};
a -= b = ${(a -= b)};
a *= b = ${(a *= b)};
a /= b = ${(a /= b)};
a %= b = ${(a %= b)};
a == b = ${a == b};
a != b = ${a != b};
a > b = ${a > b};
a < b = ${a < b};
!a && !c = ${!a && !c};
!a || !c = ${!a || !c};
`;

console.log(output1);

/* ============================================== */

//Task-2

//Assigning Variables
let first_name = "Lord";
let last_name = "Randhawa";
let email = "rand0116@algonquinlive.com";
let output2;

//Creating the expression using interpolation
output2 = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;

//Printing the Output
console.log(output2);
