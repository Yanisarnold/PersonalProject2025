// different types
const firstName = "williams"; 
const lastName = "Tim";
// tuple
const age : [number, string] = [24,"24"];
const isEmployed = false;
// array + object definition 
const arrayOfCars = ["Mercedes", "BMW", "Ferrari", "Lamborghini"];
const ObjectOfFood = {food_One:"Pie", food_Two: "Burger"}
// union Type 
let empId: string | number;

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




console.log(birthCertificate(firstName,lastName))
// todo app 