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

exports.addEmployee = () => {
    view.viewRoles(function(rolesResults) {
        var roles = [];
        for(var i = 0; i < rolesResults.length; i++) {
            roles.push(rolesResults[i].title);
        }
        var options = [
            {
                type: "input",
                message: "Employee First Name",
                name: "firstName",
            },
            {
                type: "input",
                message: "Employee Last Name",
                name: "lastName",
            },
            {
                type: "list",
                message: "Employee Role",
                name: "role",
                choices: roles
            }
        ];

        inq.prompt(options)
        .then((answers) => {
            var roleId = null;
            for(var i= 0; i < rolesResults.length; i++) {
                if(rolesResults[i].title === answers.role) {
                    roleId = rolesResults[i].role_id
                }
            }
            connection.query("INSERT INTO employees SET ?",
                {
                    first_name: answers.firstName,
                    last_name: answers.lastName,
                    emp_role_id: roleId
                },
            function(err,results) {
                if(err) throw err;
                app.start();
            });
        });
    });
};

exports.addDepartment = () => {
    view.viewDepartments(funtion())
}