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
    password: '',
    // Name of database
    database: "employee_tracker_db",
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    init();
  });
  
  //Start the inquirer prompts
