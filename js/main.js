class Developer {
  constructor(name) {
    this.name = name;
    this.type = "Developer";
  }
}
class Tester {
  constructor(name) {
    this.name = name;
    this.type = "Tester";
  }
}
class Hr {
  constructor(name) {
    this.name = name;
    this.type = "HR";
  }
}
class SocialMedia {
  constructor(name) {
    this.name = name;
    this.type = "Social Media specialist";
  }
}
class EmployeeFactory {
  constructor() {
    this.create = (name, type) => {
      switch (type) {
        case 1:
          return new Developer(name);
          break;
        case 2:
          return new Tester(name);
          break;
        case 3:
          return new SocialMedia(name);
          break;
        case 4:
          return new Hr(name);
          break;
      }
    };
  }
}

function print() {
  console.log("Hi I am " + this.name + " and i am " + this.type);
}
const employeeFactory = new EmployeeFactory();
const employees = [];
employees.push(employeeFactory.create("ahmed", 1));
employees.push(employeeFactory.create("sayed", 2));
employees.push(employeeFactory.create("khalid", 1));
employees.push(employeeFactory.create("alaa", 1));
employees.push(employeeFactory.create("doaa", 4));
employees.push(employeeFactory.create("ghada", 3));
employees.push(employeeFactory.create("sama", 4));
employees.forEach((emp) => {
  print.call(emp);
});
