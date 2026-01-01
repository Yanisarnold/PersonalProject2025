// different types
const firstName = "williams"; 
const lastName = "Tim";
const age = 24;
const isEmployed = false;
// array + object definition 
const arrayOfCars = ["Mercedes", "BMW", "Ferrari", "Lamborghini"];
const ObjectOfFood = {food_One:"Pie", food_Two: "Burger"}

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

const birthCertificate = (firstName : string ,lastName: string) => {
    const fullName = "firstName: " + firstName + " lastName: " +lastName; 
    return  fullName;
;}




console.log(birthCertificate(firstName,lastName))
// todo app 