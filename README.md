# employee-tracker
this application will manage a company's employee database

## Table of Contents

An application for a business man to be able to view and manage the departments, roles, and employees in their company so that they can organize and plan their business

## Installation Instructions

In the connection.js file enter your password in order to create the employee database. In your MySQL Workbench run the schema.sql file to create the database. Use the seed.sql file to seed data into the database.

Use the following commands to install this application.

```
npm i
node index.js
```

This application requires Node.js and MySQL. Ensure these are installed before running the application.

## Usage Information

To use this application in the terminal enter "node index.js" Use the arrow keys to select the action you want to take. Fill out any further prompts, then the application will display the related table.

Actions that can be performed are:
* View All Employees
    * Displays a table of all employees, with their roles, departments, salaries, and managers
* Vies All Employees by Department
    * Prompts the user to select a department to filter by
    * Displays a filtered table of employees by the selected department, with their roles, departments, salaries, and managers
* View All Employees by Manager
    * Prompts the user to select a manager to filter by
    * Displays a filtered table of employees by the selected manager, with their roles, departments, salaries, and managers
* Add Employee
    * Prompts the user to enter the name, select the role, and manager of the new employee
    * Then displays all employees to view the added employee
* Remove Employee
    * Prompts the user to select the employee to remove
    * Then displays all employees to see that the selected employee is no longer available
* Update Employee Role
    * Prompts the user to select an employee to update, and which role to update to
    * Then it displays all employees to view the updated role
* Update Employee Manager
    * Prompts the user to select an employee to update, and which manager to update to
    * Then it displays all employees to view the updated manager
* View All Roles
    * Displays a table of all roles, salaries, and departments
* Add Role
    * Prompts the user to enter the title of the role, the salary, and select the department
    * Then displays all roles to view the added role
* Remove Role
    * Prompts the user to select a role to remove
    * Then displays all roles to see that the selected role is no longer available
* View All Departments
    * Displays a table of all departments
* Add Department
    * Prompts the user to enter the department name
    * Then displays a table of all departments to view the added department
* Remove Department
    * Prompts the user to select a department to remove
    * Then displays all departments to see that the selected department is no longer available
* View Department Budget
    * Prompts the user to select a department
    * Then displays the sum of all the salaries of the employees within that department
* Quit
