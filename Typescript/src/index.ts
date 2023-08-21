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


// functions 

function productNumbers (num1: number , num2: number) : number {
    return num1 * num2;
}

console.log(productNumbers(10,23));

function log( message : string | number) : void{
    console.log(message);
    
}
console.log(log("Hello world"));

//  interfaces 


interface UserInterface  {
        readonly id: number,
        name: string,
        isAdult: boolean,
        age: number
    }

const user4 : UserInterface = {
    id: 123,
    name:"John",
    isAdult:false,
    age : 10
}


// user4.id = 1234;

console.log(user4);


type pen = number | string
const pen1 : pen = 123


// functional interfaces 

interface CalcFunction {
    (num1 : number, num2 : number) : number
}


const add: CalcFunction = ( num1, num2) => num1 + num2

console.log(add(123,23));



// classes 

interface CustomerInterface  {
    id: number,
    name: string,
    age: number,
    purchase(): string
}

class Motorcycle implements CustomerInterface{
    private productID: number
    id: number
    age: number
    name : string
    brandName: string
    constructor(productId : number, name : string) {
       this.productID = productId
       this.name = name
       
        // console.log("Hello this message is coming from the contructor");
    }

    purchase () {
        return `${this.name} has been purchased by user`
    }

}

const Himalayan = new Motorcycle(101, "Royal enfield Himalayan");
const activa = new Motorcycle(102, "Honda Activa")
console.log(Himalayan.purchase());

// Himalayan.productID = 105



console.log(Himalayan,activa);

class Scooter extends Motorcycle {
    price : number

    constructor(ProductId: number, name: string , price: number) {
        super(ProductId,name)
        this.price = price;

    }
}

const vespa = new Scooter(102, "Vespa Original", 100000);
console.log(vespa);
console.log(vespa.purchase());
