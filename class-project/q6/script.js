/* 6) Using Object prototyping create Emp function already added name, email, salary but not add designation. 
designation add by object prototyping. */

function Emp(name,email,salary){
  this.name = name;
  this.email = email;
  this.salary = salary;
}

Emp.prototype.setDesignation = function(newname,desg){
  // this.name = newname;
  console.log(`Student
  Name: ${this.name}
  Email: ${this.email}
  Salary: ${this.salary}
  Designation: ${desg} `);
}

const d = new Emp("Bhargav","bhargav@gmail.com","50k" );
d.setDesignation("subham","student");



  