let parent = Document.getElementById("parent");

function renderTab() {
  let table = document.createElement("table");
  parent.appendChild(table);

  let tr = document.createElement("tr");
  table.appendChild(tr);

  let thOne = document.createElement("th");
  tr.appendChild(thOne);
  thOne.textContent = "Department Name";

  let thTwo = document.createElement("th");
  tr.appendChild(thTwo);
  thTwo.textContent = "Number of employees in each department";

  let thThree = document.createElement("th");
  tr.appendChild(thThree);
  thThree.textContent = "Average salary of the department";

  let thFour = document.createElement("th");
  tr.appendChild(thFour);
  thFour.textContent = "Total salary";
}

Employee.prototype.renderTable = function () {
  let tr = document.createElement("tr");
  table.appendChild(tr);

  let thOne = document.createElement("td");
  tdOne.textContent = this.department;
  tr.appendChild(tdOne);

  let tdTwo = document.createElement("td");
  tdTwo.textContent = i;
  tr.appendChild(tdTwo);

  let tdThree = document.createElement("td");
  tdThree.textContent = this.randomSalary;
  tr.appendChild(tdThree);

  let tdFour = document.createElement("td");
  tdFour.textContent = this.salary;
  tr.appendChild(tdFour);
};

function renderTa() {
  for (let index = 0; index < Employee.allEmployees.length; index++) {
    Employee.allEmployees[i].renderTable;
  }
}

function count(empl) {
  let counted = employ.split("");
  return `${counted[2]}/${counted[5]}`;
}
