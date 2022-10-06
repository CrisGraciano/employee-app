const mysql = require('mysql2');
const app = require('../app');

const connection = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'alycris1205!',
    database: 'employee_db'
});

exports.viewDepartments = (cb) => {
    connection.query('SELECT * FROM department', function(err, results) {
        if(err) throw err;
        cb(results);
    });
}

exports.viewRoles = (cb) => {
    connection.query("SELECT * FROM department", function(err,results) {
      if(err) throw err;
      cb(results);
   });
}

exports.viewEmployees = (cb) => {
    connection.query("SELECT * FROM employees", function(err,results) {
      if(err) throw err;
      cb(results);
   });
 }