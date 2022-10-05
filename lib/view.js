function viewDeptartments() {
    db.findAllDept()
        .then(([rows]) => {
            let dept = rows;
            console.log("\n");
            console.table(dept);
        })
        .then(() => init());
}

function viewRoles() {
    db.findAllRoles()
    .then(([rows]) => {
        let roles = rows;
        console.log("\n");
        console.table(roles);
    })
    .then(() => init());
}

function viewEmployees() {
    db.findAllEmp()
        .then(([rows]) =>{
            let emp = rows;
            console.log("\n");
            console.table(emp);
        })
        .then(() => init());
}