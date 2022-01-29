// "use strict";

// Declaring var:

let department = ["administration", "marketing", "development", "finance"];
let level = ["Junior", "Mid-Senior", "Senior"];
let allEmployees = [];

// My Constructor:

function Employee(employeeID, fullName, department, level) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  //   this.img = img;
  this.salary = 0;

  allEmployees.push(this);
}

// Instances:
let ghazi = new Employee(1000, "Ghazi Samer", department[0], level[2]);
let lana = new Employee(1001, "Lana Ali", department[3], level[2]);
let tamara = new Employee(1002, "Tamara Ayoub	", department[1], level[2]);
let safi = new Employee(1003, "Safi Walid	", department[0], level[1]);
let omar = new Employee(1004, "Omar Zaid	", department[2], level[2]);
let rana = new Employee(1005, "Rana Saleh	", department[2], level[0]);
let hadi = new Employee(1006, "Hadi Ahmad	", department[3], level[2]);

// Functions:

function getRndInteger(min, max) {
  return Math.ceil(Math.random() * (max - min + 1)) + min;
}

// Methods:

Employee.prototype.randomSalary = function (min, max) {
  let ran = getRndInteger(min, max);
  this.salary = ran - ran * 0.075;
};

// check to assign the salary

for (let i = 0; i < allEmployees.length; i++) {
  if (allEmployees[i].level === "Junior") {
    allEmployees[i].randomSalary(500, 1000);
    console.log(allEmployees[i]);
  } else if (allEmployees[i].level === "Mid-Senior") {
    allEmployees[i].randomSalary(1000, 1500);
    console.log(allEmployees[i]);
  } else if (allEmployees[i].level === "Senior") {
    allEmployees[i].randomSalary(1500, 2000);
    console.log(allEmployees[i]);
  }
}
// Render on Screen:

Employee.prototype.render = function () {
  document.write("Name:" + `${this.fullName}`);
  document.write("Salary :" + `${this.salary}`);
};

ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();

// console.log(getRndInteger(500, 1000));
// console.log(getRndInteger(1000, 1500));
// console.log(getRndInteger(1500, 2000));
// // console.log(allEmployees);
