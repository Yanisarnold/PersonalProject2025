class Person {
    name: string;
    age: number; 

    constructor(name: string, age: number) {
        this.age = age;
        this.name =name;
    }


     contact(): void {
        console.log(this.age)
    }
}