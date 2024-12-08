/* 4) Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and rectangle 
area (width*height) using with argument. */

class Shape{
  constructor(radius , width , height){
    this.radius = radius;
    this.width = width;
    this.height = height; 
  }

  circle(){
    console.log(`The Area of circle is ${this.radius * this.radius * 3.14}`);
  }
  rectAngel(){
    console.log(`The Area of circle is ${this.width * this.height}`);
  }
}

const ci = new Shape(125 , 120 , 20)
ci.circle();

const re = new Shape(10 , 20 , 30);
re.rectAngel();