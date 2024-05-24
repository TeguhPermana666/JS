/*    - Merupakan turunan dari class Animal
*    - Memiliki method:
*      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
*    - Ketika diinstansiasi, properti isMammal harus bernilai false
* 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
*    - properti name bernilai: "Labi"
*    - properti age bernilai: 2
* 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
*    - properti name bernilai: "Elo"
*    - properti age bernilai: 4
*/

// Tulis kode di bawah ini
class Animal{
   constructor(name,age,isMammal){
       this.name = name;
       this.age = age;
         this.isMammal = isMammal;
   }
}
class Rabbit extends Animal{
   constructor(name,age,isMammal){
       super(name,age,isMammal);
         this.isMammal = true;
   }
     eat(){
       return `${this.name} sedang makan!`;
   }
}
class Eagle extends Animal{
   constructor(name, age, isMammal){
       super(name,age,isMammal);
         this.isMammal = false;
   }
     fly(){
       return `${this.name} sedang terbang!`;
   }
}

myRabbit = new Rabbit("Labi",2);
myEagle = new Eagle("Elo",4);