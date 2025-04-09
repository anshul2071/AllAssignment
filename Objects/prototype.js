function Person(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
  
  // Adding method to prototype
  Person.prototype.greet = function () {
    return `Hello, my name is ${this.name} and my hobby is ${this.hobby}`;
  };
  
  const person1 = new Person("Ram", 25, "Football");
  const person2 = new Person("Monika", 30, "Dancing");
  
  console.log(person1.greet()); 
  console.log(person2.greet()); 
  