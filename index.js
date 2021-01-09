const mysql = require('mysql');
const inquirer = require('inquirer');
const config = require('./package.json');


// Setting up the connection to mysql
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password 
    password: 'Newcoding#2020',
    // Name of database
    database: "employee_tracker_db",
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    init();
  });
  
  //Start the inquirer prompts

  const start = () => {
    inquirer.prompt([
            {
            type:'list',
            name:'start',
            message: 'What would you like to do?',
            choices: [
                    'View All Employees',
                    'View Employees by Roles',
                    'View Employees by Department',
                    'Add an Employee',
                    'Add a Role',
                    'Add a Department',
                    'Update an Employee Role',
                    'Remove an Employee',
                    'Finish'
                      ]
                    }
                ])

    //Setting up cases for the responses
        .then(response => {
                  switch (response.action) {
                    case "View All Employees":
                      viewEmployees();
                      break;

                    case "View Employees by Roles":
                        viewRoles();
                        break;
            
                    case "View Employees By Department":
                      employeesByDepartment();
                      break;
            
                    case "Add an Employee":
                      addEmployee();
                      break;
            
                    case "Add a Role":
                      addRole();
                      break;
            
                    case "Add a Department":
                      addDepartment();
                      break;
            
                    case "Update an Employee Role":
                      updateRole();
                      break;
            
                    case "Remove an Employee":
                      removeEmployee();
                      break;
    
            //Use connection.end if user selects "finish"
                    case "Finish":
                      connection.end();
                      break;
                  }
                });
            }
