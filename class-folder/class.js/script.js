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

  }
}
const name1 = new newPerson('bhargav', '7590', '79905 80584', 'NVS');
name1.spek();
