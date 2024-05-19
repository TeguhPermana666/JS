// Old Konsep OOP JS

// Constructor Function
function Car(name, model, year){
    this.name = name,
    this.model =model,
    this.year = year
}
// Function class

Car.prototype.drive = function(){
    return `${this.name} is driving`;
}

Car.prototype.sell = function(){
    return `${this.name} with model ${this.model} of year ${this.year} has been sold`;
}
// Initialitation
mobil = new Car('BMW', 'X5', 2020);
console.log(mobil.drive(),".\t",mobil.sell())

// New Konsep OOP JS // Commonly konsep of oop programming (lie py or java)
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    walk(){
        return `${this.name} is walking`;
    }
    sleep(){
        return `${this.name} is sleeping`;
    }
    die(jam){
        return `${this.name} has been die at ${this.age} on ${jam} hours` 
    }
}

const orang = new Person('Abdul', 100);
console.log(`${orang.walk()}, ${orang.sleep()}, ${orang.die(10.00)}`)