/*You will be working with this class

give the class at least 3 properties
give the class at least 3 methods
create two instances of the class (two cats)
log both instances to see their properties
invoke each method from both instances*/

class Cat {
  constructor(type, weight, favToy) {
    this.type = type;
    this.weight = weight;
    this.favToy = favToy;
  }
  type() {
    let type = new type();
    return this.type;
  }
  weight() {
    let weight = new weight();
    console.log(weight);
  }
  toy() {
    let toy = new toy();
    return this.toy + "is fun";
  }
}
const Cat2 = new Cat("persian", "15lbs", "feather");
const Cat3 = new Cat("british shorthair", "13lbs", "tower");
//console.log(Cat2)
//console.log(Cat3)

console.log(Cat.weight());
