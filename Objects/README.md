# AmnilAssignment [Objects]

1. Object
📌 Definition

An object in JavaScript is a collection of key-value pairs, where properties (keys) store values. Objects allow structured data storage and manipulation.
📌 Description

    Objects store multiple related values.
    They can contain properties (variables) and methods (functions).
    Objects can be created using object literals, constructors, or classes.

📌 Syntax

const person = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log("Hello!");
  }
};

2. Method
📌 Definition

A method is a function that is defined inside an object and is used to perform actions related to that object.
📌 Description

    Methods allow objects to have behavior.
    They can access and modify object properties using this.

📌 Syntax

const person = {
  name: "Alice",
  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(person.sayHello()); // Output: Hello, my name is Alice

3. Constructor Function
📌 Definition

A constructor function is a function used to create multiple instances of objects with similar properties and methods.
📌 Description

    Constructor functions use the new keyword to create objects.
    this inside the constructor refers to the new object.
    They allow easy object instantiation.

📌 Syntax

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 25);
console.log(person1.name); // Output: Alice

4. Getters & Setters
📌 Definition

Getters and setters are special methods that control access to an object’s properties.
📌 Description

    Getters (get) retrieve property values.
    Setters (set) allow modifying property values while applying validation or processing.

📌 Syntax

const user = {
  firstName: "John",
  lastName: "Doe",
  
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(user.fullName); // Output: John Doe
user.fullName = "Alice Smith";
console.log(user.fullName); // Output: Alice Smith

5. Prototype
📌 Definition

A prototype is an object from which other objects inherit properties and methods.
📌 Description

    Every JavaScript function has a prototype property.
    It allows shared methods across all instances.
    It optimizes memory usage by storing shared methods in a single place.

📌 Syntax

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  return `Hello, my name is ${this.name}`;
};

const person1 = new Person("Alice");
console.log(person1.sayHello()); // Output: Hello, my name is Alice

📌 Summary Table
Topic                      Definition
------	                  -------------
Object:              |  A collection of key-value pairs storing properties and methods.
Method:              |  A function inside an object that defines behavior.
ConstructorFunction: |  A function used to create multiple instances of objects.
Getters & Setters:	 |  Special methods to get and set object properties securely.
Prototype:           |	An object from which other objects inherit methods and properties.
📌 License

This project is open-source and available under the MIT License.
🚀 Contribute

If you find an issue or want to improve this documentation, feel free to fork the repository and submit a pull request! 🚀