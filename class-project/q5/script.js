// 5) Create a mobile functional class default set model no then set color using prototyping .

// Define the Mobile class
class Mobile {
  constructor(modelNo, color, description) {
    this.modelNo = modelNo;
    this.color = color;
    this.description = description;
  }
}

Mobile.prototype.setColor = function () {
  console.log(`Model: ${this.modelNo}, Color: ${this.color}, Description: ${this.description}`);
};

Mobile.prototype.setDescription = function () {
  console.log(`Model: ${this.modelNo}, Color: ${this.color}, Description: ${this.description}`);
};

const mobile1 = new Mobile("Galaxy S22", "Black", "A flagship mobile with advanced features.");
mobile1.setColor();

const mobile2 = new Mobile("iPhone 15", "Silver", "The latest model with cutting-edge technology.");
mobile2.setDescription();



