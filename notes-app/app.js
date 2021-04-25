// const fs = require("fs");
// fs.writeFileSync("notes.txt", "This file was created by Node.js!\nHello world!");
// fs.appendFileSync('./notes.txt', '\nThis text was appended!');

// const add = require("./utils");
// const sum = add(4, -2);
// console.log(sum);

// const validator = require("validator");
// console.log(validator.isEmail("example.com"));
// console.log(validator.isURL("example.com"));

// const chalk = require("chalk");
// console.log(chalk.red.bold.inverse("Error!"));

const getNotes = require("./notes");
const msg = getNotes();
console.log(msg);

const command = process.argv[2];

if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}
