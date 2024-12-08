// 1. constructor with inharitance ---------------------------------------------------------------------------------------------
// class Myclass {
//   constructor (name,age){
//     this.name = name;
//     this.age = age;
//   }

//   myMethod(){
//     console.log(`My Name is ${this.name}. My age is ${this.age} `);
    
//   }
// }

// class Pclass extends Myclass{
//   constructor (name,age,location){
//     super(name,age);
//     this.location = location;
//   }


//   myLocation(){
//     console.log(`My Location is ${this.location}. My age is ${this.age}`);
//   }   
// }

// const obj1 = new Pclass('bhargav',21 , 'navsari');
// obj1.myLocation();
// obj1.myMethod();

// 2. constructor  with polymorphism-------------------------------------------------------------------------------------------

class person {
  constructor(name, id) {
    this.name = name;
    this.personId = id
  }

  spek() {
    console.log(`Person name ${this.name} And Person id is ${this.personId}`);
  }
}


class newPerson extends person {
  constructor(name, id, number, city) {
    
    super(name, id);
    this.personPN = number;
    this.personLocation = city;
  }
  spek() {
    console.log(`Person name ${this.name} And Person id is ${this.personId} person number ${this.personPN} person location ${this.personLocation}`);
    // return 1 + 2; 
  }
}
const name1 = new newPerson('bhargav', '7590', '79905 80584', 'NVS');
name1.spek();
// console.log(name1.spek());


// 2 -----------------------------------------------------------------------------------------------------------------------

class Bank {
  #name; // ancapulation private
  constructor (name,numA) {
    this.#name = name ;
    this.numA = numA;
    
  }
  #person(){
    console.log(`Accout Holder name is ${this.#name} and Your Acoout numbe is ${this.numA}`);
  }
  print(){
    this.#person(); // abstraction hidde
  }
}

class Newclass extends Bank
{
  constructor (name,numA,ifsc){
    super(name,numA)
    this.ifsc = ifsc;
  }
  person(){
    console.log(`Accout Holder name is ${this.name} and Your Acoout numbe is ${this.numA} , Your IFSC cod is ${this.ifsc}`);
  }
}

const person1 = new  Newclass('Bhargav' ,' 07858100002088' , 'BRB0JALALP');
person1.person();

const person2 = new  Bank('Bhargav' ,' 07858100002088' , 'BRB0JALALP');
person2.print();

