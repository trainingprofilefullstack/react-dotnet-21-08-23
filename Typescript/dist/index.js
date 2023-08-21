// batic types
let id = 110; // number data type
let company = "Tata"; // string type
let isListed = true; // boolean 
let product = "Earphones"; // any 
console.log("ID", id);
console.log("company", company);
console.log("is it listed in the market", isListed);
console.log("product name", product);
// array types
let productIds = [12, 23, 34, 45, 56, 67, 78];
productIds.push(99);
let productNames = ["Detergent", 123, "laptop", true];
productNames.push(888);
//tuple
let employees = [123, "kumar", 124, "Vikarm"];
// tuple array
let students;
students = [
    [1, "Aditya"],
    [2, "rohan"],
    [3, "Gourav"],
    [4, "Vikram"]
];
students.push([5, "E"]);
// unions
let studentid;
studentid = 123;
console.log(studentid);
// Enum 
var food;
(function (food) {
    food[food["eggs"] = 0] = "eggs";
    food[food["veggies"] = 1] = "veggies";
})(food || (food = {}));
console.log(food.eggs);
const user = {
    id: 101,
    name: "Vishal",
    isAdult: true,
    age: 30
};
const user1 = {
    id: 101,
    name: "Vishal",
    isAdult: true,
    age: 30
};
const user2 = {
    id: 101,
    name: "Vishal",
    isAdult: true,
    age: 30
};
const user3 = {
    id: 101,
    name: "Vishal",
    isAdult: true,
    age: 30
};
// type assertion
let cid = 1;
let customerId = cid;
customerId = 9;
let companyId = cid;
companyId = "Tata01";
