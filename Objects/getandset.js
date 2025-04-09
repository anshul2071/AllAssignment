const student = {
    firstName: "Randip",
    lastName: "Sharma",
    age: 30,

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
      const parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  };
  
  console.log(student.fullName);  
  student.fullName = "Rahul Shah";
  console.log(student.fullName);  
  