// Properti

// 1. Default Property
class Person {
    constructor(first, second, age) {
        //Data Property
        this.first = first;
        this.second = second 
        this.age = 100; // Default property
    }
    // 2. Getter and Setter => Accessor property
    get fullName(){
        return `${this.first} ${this.second}`
    }
    set fullName(fullname){
        [this.first, this.second] = fullname.split(' ');
    }
}
const user = new Person('John', 'Doe');
console.log(user);
// Getter 
console.log(user.fullName);
 //Setter
user.fullName = 'Fulan Fulanah';
console.log(user);
console.log(user.fullName);

// Getter and setter untuk proteksi perubahan/ access the private property and method
class Car {
    #chassisNumber= null; // Eclosing class
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.#chassisNumber = this.#generateChassisNumber(); // # => Private property
    }
   
    get chassisNumber() {
      return this.#chassisNumber; // # => Private
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
    // Methods
    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }
    
    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }
    
    turn(direction) {
        console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }
    #generateChassisNumber() { // # => Private method
        return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
}

const car = new Car('BMW', 'red', 200);
console.log(car.chassisNumber);
car.chassisNumber = 'BMW-1';
console.log(car.chassisNumber);

console.log('Method:\n')
// Method
car.drive();
car.turn('left');
car.reverse();

// car.#generateChassisNumber() // Syntax Error -> Private, instance cant access
// console.log(car.#chassisNumber); // Syntax error -> Private, instance cant accsess

// To access the private property, use a getter or a setter
console.log(car.chassisNumber); // Access like a property