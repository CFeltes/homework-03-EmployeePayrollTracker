// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// Collect employee data
const collectEmployees = function() {
  const employees = [];
  let numEmployees = prompt("How many employees would you like to add?");

  // Parse the input to a number
  numEmployees = parseInt(numEmployees, 10);

  // Check if numEmployees is a valid number
  if (isNaN(numEmployees) || numEmployees <= 0) {
    alert("Please enter a valid number of employees.");
    return [];
  }

  // Loop to collect employee data
  for (let i = 0; i < numEmployees; i++) {
    const firstName = prompt(`Enter the first name of employee ${i + 1}:`);
    const lastName = prompt(`Enter the last name of employee ${i + 1}:`);
    const salary = parseFloat(prompt(`Enter the salary of employee ${i + 1}:`));

    // Ensure salary is a valid number
    if (isNaN(salary)) {
      alert("Invalid salary entered. Please try again.");
      i--; // Repeat for current employee
      continue;
    }

    // Create employee object and add to array
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };
    employees.push(employee);
  }

  return employees; // Return the array of employee objects
}
  // TODO: Get user input to create and return an array of employee objects
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
