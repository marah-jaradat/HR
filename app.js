// "use strict";

// Declaring var:

let department = ["administration", "marketing", "development", "finance"];
let level = ["Junior", "Mid-Senior", "Senior"];
let allEmployees = [];

// Employee.allEmployees = [];
// Define:

let headerParent = document.getElementById("headerParent");
// let title = document.createElement("h2");
// title.textContent = "employeeee";
// headerParent.appendChild(title);

let myEmployDiv = document.getElementById("myEmploy");
let main = document.getElementById("main");
let myForm = document.getElementById("form");
let myBtn = document.getElementById("btn");
// My Constructor:

function Employee(fullName, department, level, img) {
  this.employeeID = 0;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.img = img;
  this.salary = 0;

  allEmployees.push(this);
}

// Instances:
let ghazi = new Employee(
  "Ghazi Samer",
  department[0],
  level[2],
  "/assets/Ghazi.jpg"
);
let lana = new Employee(
  "Lana Ali",
  department[3],
  level[2],
  "/assets/Lana.jpg"
);
let tamara = new Employee(
  "Tamara Ayoub	",
  department[1],
  level[2],
  "/assets/Tamara.jpg"
);
let safi = new Employee(
  "Safi Walid	",
  department[0],
  level[1],
  "/assets/Safi.jpg"
);
let omar = new Employee(
  "Omar Zaid	",
  department[2],
  level[2],
  "/assets/Omar.jpg"
);
let rana = new Employee(
  "Rana Saleh	",
  department[2],
  level[0],
  "/assets/Rana.jpg"
);
let hadi = new Employee(
  "Hadi Ahmad	",
  department[3],
  level[2],
  "/assets/Hadi.jpg"
);

// Functions:

function getRndInteger(min, max) {
  return Math.ceil(Math.random() * (max - min + 1)) + min;
}

function saveToLocal() {
  let becomeSrting = JSON.stringify(allEmployees);

  localStorage.setItem("Employee", becomeSrting);
}

function getData() {
  let data = localStorage.getItem("Employee");
  let parsedData = JSON.parse(data);
  if (parsedData != null) {
    allEmployees = [];
    console.log(parsedData);
    for (let i = 0; i < parsedData.length; i++) {
      console.log(parsedData[i]);
      new Employee(
        parsedData[i].employeeID,
        parsedData[i].fullName,
        parsedData[i].department,
        parsedData[i].level,
        parsedData[i].img
      );
    }
  }
  renderAll();
}

// for (let i = 0; i < parsedData.length; i++) {
//   new Employee(parsedData[i]);
// }
// parsedData.randomSalary();
// parsedData.randomID();
// parsedData.render();

// Methods:

Employee.prototype.randomSalary = function (min, max) {
  let ran = getRndInteger(min, max);
  this.salary = ran - ran * 0.075;
};

Employee.prototype.randomID = function (min, max) {
  this.employeeID = getRndInteger(min, max);
};

Employee.prototype.render = function () {
  let empName = document.createElement("h5");
  empName.textContent = this.fullName;
  myEmployDiv.appendChild(empName);
  let imgg = document.createElement("img");
  imgg.setAttribute("src", this.img);
  myEmployDiv.appendChild(imgg);
  imgg.style.width = "200px";
};

for (let i = 0; i < allEmployees.length; i++) {
  allEmployees[i].randomID(1000, 9999);
  // console.log(allEmployees[i]);
  allEmployees[i].render();
}

// check to assign the salary
// function renderAll() {
for (let i = 0; i < allEmployees.length; i++) {
  if (allEmployees[i].level === "Junior") {
    allEmployees[i].randomSalary(500, 1000);
    // console.log(allEmployees[i]);
  } else if (allEmployees[i].level === "Mid-Senior") {
    allEmployees[i].randomSalary(1000, 1500);
    // console.log(allEmployees[i]);
  } else if (allEmployees[i].level === "Senior") {
    allEmployees[i].randomSalary(1500, 2000);
  }
  // console.log(allEmployees[i]);
}
// }
// renderAll();

// Adding Events:
myForm.addEventListener("submit", createSubmit);
function createSubmit(event) {
  event.preventDefault();
  // console.log(event);
  let name = event.target.employeeName.value;
  let dep = event.target.value;
  let lev = event.target.levForm.value;
  let images = event.target.images.value;

  let newEmployee = new Employee(name, images);
  newEmployee.randomSalary();
  newEmployee.randomID();
  // renderAll();
  saveToLocal();
  newEmployee.render();
}
function renderAll() {
  for (let i = 0; i < allEmployees.length; i++) {
    allEmployees[i].render();
  }
}
getData();
