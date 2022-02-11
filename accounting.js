let parent = Document.getElementById("parent");

Employee.prototype.renderTable = function () {
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
};

function renderTa() {
  for (let index = 0; index < allEmployees.length; index++) {}
}

function count(empl) {
  let counted = employ.split("");
  return `${counted[2]}/${counted[5]}`;
}
