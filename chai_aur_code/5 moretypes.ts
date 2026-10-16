// type assertion !!

let response: any = "42";

let numericLength: number = (response as string).length

type Book = {
    name: string
}

let bookString = '{"name":"who moved my cheese"}'
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);

// jab type assert karoge - use baad hi . lagane pe functions applicable show honge

// benefit of unknown

let value: any

value = "chai"
value = [1, 2, 3]
value = 2.5
value.toUpperCase()

let newValue: unknown

newValue = "chai"
newValue = [1, 2, 3]
newValue = 2.5
// newValue.toUpperCase() can't do this

if(typeof newValue === 'string') newValue.toUpperCase();

try {
    
} catch (error) {
    if(error instanceof Error) console.log(error.message)
    // console.log(error.) - aise message ka option nhi aayega
} 

const data: unknown = "chai aur code"
const strData: string = data as string

// when you handeled all the cases - uske baad type will show never

type Role = "admin" | "user"

function redirectBasedOnRole(role: Role): void {
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard");
        return
    }
    role; //-> never aayega
}

// for functions returning nothing

function neverReturn(): never {
    while(true){}
}