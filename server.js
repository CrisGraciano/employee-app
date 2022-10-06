const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require('console.table');

var view = require('./lib/view');
var add = require('./lib/add');
var update = require('./lib/update');

var connection = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'alycris1205!',
    database: 'employee_db'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    init();
  });

  function init() {
    inquirer.prompt ([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: [
                {
                    name: 'View Departments',
                    value: 'viewdepartments'
                },
                {
                    name: 'Add Department',
                    value: 'addDepartment'
                },
                {
                    name: 'View Roles',
                    value: 'viewRoles'
                },
                {
                    name: 'Add Role',
                    value: 'addRole'
                },
                {
                    name: 'View Employees',
                    value: 'viewEmployees'
                },
                {
                    name: 'Add Employee',
                    value: 'addEmployee'
                },
                {
                    name: 'Update Employee Role',
                    value: 'updateEmployee'
                },
                {
                    name: 'Exit App',
                    value: 'exit'
                }
            ]
        }
    ])
    .then(function ({ choice }) {
        console.log(choice);
        switch (choice) {
            case 'viewDepartments':
                viewDepartments();
                break;
            case 'addDepartment':
                addDepartment();
                break;
            case 'viewRoles':
                viewRoles();
                break;
            case 'addRoles':
                addRole();
                break;
            case 'viewEmployees':
                viewEmployees();
                break;
            case 'addEmployee':
                addEmployee();
                break;
            case 'updateEmployee':
                updateEmployee();
                break;
            case 'exit':
                exit();
                break;
        }
    });
  }

  

