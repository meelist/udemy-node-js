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

const notes = require("./notes");
const yargs = require("yargs");

// Customize yargs version
yargs.version("1.1.0");

// Create custom commands
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "The title of the note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "The body of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "The title of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List the notes",
  handler: function () {
    console.log("Listing the notes!");
  },
});

yargs.command({
  command: "read",
  describe: "Read the note",
  handler: function () {
    console.log("Reading the note!");
  },
});

yargs.parse();
