class Person {
    static counter = 0;

    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        Person.counter++;
    }

    static getCounter() {
        return Person.counter;
    }

    fullName() {
        return this.name + " " + this.lastName
    }

    static version() {
        return "version 1"
    }
};

class Muhasebeci extends Person {

}

let person1 = new Person("eda", "yildirim");
console.log(person1.getCounter());
let person2 = new Person("ilker", "test");
console.log(person2.getCounter());
console.log(Person.version());
console.log(person1.fullName());
console.log(person2.fullName());
let muhasebeci = new Muhasebeci("ali", "aslan");



