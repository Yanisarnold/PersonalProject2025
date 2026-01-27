// different types
const firstName = "williams"; 
const lastName = "Tim";
// tuple
type InterSectionTypes = string & number;
const age : [number, string] = [24,"24"];
const isEmployed = false;
// array + object definition 
const arrayOfCars = ["Mercedes", "BMW", "Ferrari", "Lamborghini"];
const ObjectOfFood = {food_One:"Pie", food_Two: "Burger"}
// union Type 

interface BusinessPartner {
    name: string,
    credit: number
}


interface Contact {
    email: string,
    phone: number
}
type  empId =  BusinessPartner & Contact;


const person: empId = {
    name: 'John Doe',
    credit: 2000,
    email: '@gmail.com',
    phone:736127868

}

// type definition 
type food = {
    name:string, 
    color?:string,
    price:string
}
// interface
interface countryOfOrigin  {
    country: string;
    city: string,
    flight: number

}

// enums
enum placeOfBirth {
 City = "London",
 Borough = "Croydon"
}


const birthCertificate = (firstName : string ,lastName: string) => {
    const fullName = "firstName: " + firstName + " lastName: " +lastName; 
    return  fullName;
}


// npx ts-node ts-project/practice-ts/index.ts

console.log(birthCertificate(firstName,lastName))
// todo app 

function identity(arg: number): number {
    return arg;
}