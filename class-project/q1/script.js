class School{
  constructor(name, email, contact){
    this.name = name;
    this.email =email;
    this.contact = contact;
  }

  student(){
    console.log(`Student name is ${this.name}, Student Email is ${this.email} and Contact Number is ${this.contact}`);
    
  }

  faculty(){
    console.log(`Faculty name is ${this.name}, Faculty Email is ${this.email} and Contact Number is ${this.contact}`);

  }

  peon(){
    console.log(`Peon name is ${this.name}, Peon Email is ${this.email} and Contact Number is ${this.contact}`);
  }
}

let st1 = new School("Akshar","akshar@gmail.com","123456789");
st1.student();

let fac = new School("Amay","amay@gmail.com","2468101245");
fac.faculty();

let pe = new School("milan","milan@gmail.com","123456789");
pe.peon();