const mysql = require("mysql");
const inq = require("inquirer");
const app = require("../app");
const view = require("./view");

const connection = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'alycris1205!',
    database: 'employee_db'
});

exports.updateEmployeeRole = () => {
    view.viewEmployees(function(employeeList) {
        console.log(employeeList);
        var employees = [];
        for (var i=0; i < employeeList.length; i++) {
            var empname = {
                name: employeeList[i].first_name + ' ' + employeeList[i].last_name,
                value: {
                    id: employeeList[i].emp_id,
                    firstname: employeeList[i].first_name,
                    lastname: employeeList[i].last_name
                } 
            };

            employees.push(empname)
        };

        inquirer.prompt ([
            {
                type: "list",
                message: "Which employee would you like to update?",
                name: "employee",
                choices: employees
            }
        ]).then((answers) => {
            view.viewRoles(function (rolesResults) {
                var roles = [];
                for (var i = 0; i < rolesResults.length; i++) {
                    var role = {
                        name: rolesResults[i].title,
                        value: {
                            id: rolesResults[i].role_id,
                            role: rolesResults[i].title,
                        }
                    }
                    roles.push(role);
                };

                inquirer.prompt ([
                    {
                        type: "list",
                        message: `Which role would you like to update ${answers.employee.firstname} to?`,
                        name: "role",
                        choices: roles
                    }
                ]).then((results) => {
                    connection.query("UPDATE employees SET emp_role_id = ? WHERE emp_id = ?",[results.role.id, answers.employee.id],function (err, results) {
                        if (err) throw err;
                        console.log("Successfully updated " + answers.employee.id);
                        app.start();
                    })    
                });
            });
        });
    });
}