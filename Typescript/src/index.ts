// batic types

let id: number = 110; // number data type
let company: string = "Tata"; // string type
let isListed: boolean = true; // boolean 
let product: any = "Earphones" // any 


console.log("ID", id);
console.log("company", company);
console.log("is it listed in the market", isListed);
console.log("product name", product);


// array types

let productIds: number[] = [12, 23, 34, 45, 56, 67, 78];

productIds.push(99);


let productNames: any[] = ["Detergent", 123, "laptop", true];

productNames.push(888);

//tuple
let employees: [number, string, number, string] = [123, "kumar", 124, "Vikarm"];


// tuple array
let students: [number, string][]

students = [
    [1, "Aditya"],
    [2, "rohan"],
    [3, "Gourav"],
    [4, "Vikram"]
]
students.push([5, "E"]);


// unions
let studentid: string | number;

studentid = 123

console.log(studentid);


// Enum 

enum food {
    eggs,
    veggies
}

console.log(food.eggs);


// objects

type User =
    {
        id: number,
        name: string,
        isAdult: boolean,
        age: number
    }


const user: {
    id: number,
    name: string,
    isAdult: boolean,
    age: number
} = {
    id: 101,
    name: "Vishal",
    isAdult: true,
    age: 30
}

const user1: User = {
    id: 101,
    name: "Vishal",
    isAdult: true,
    age: 30

}
const user2: User = {
    id: 101,
    name: "Vishal",
    isAdult: true,
    age: 30

}

const user3: User = {
    id: 101,
    name: "Vishal",
    isAdult: true,
    age: 30

}

// type assertion
let cid : any = 1
let customerId = <number>cid

customerId = 9

let companyId = cid as string;

companyId = "Tata01"




