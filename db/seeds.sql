USE employee_db;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Cris", "Graciano", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Homer", "Simpson", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Marge", "Simpson", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bart", "Simpson", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lisa", "Simpson", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Maggie", "Simpson", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Peter", "Griffin", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lois", "Griffin", 1, 2);