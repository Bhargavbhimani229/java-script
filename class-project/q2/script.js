/* 2) Create a Person class and with argument create a Father and Child method father age of 60 and child 
age of 20 print with argument.*/

class Person{
  constructor(age){
    this.age = age;
  }

  father(){
    console.log(`Age of Father ${this.age}`);
  }

  child(){
    console.log(`Age of Child ${this.age}`);
  }
};

let f = new Person(60);
f.father();

let c =new Person(20);
c.child();
