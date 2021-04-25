const fs = require("fs");
const chalk = require("chalk");
const dataFile = "notes.json";

const getNotes = function () {
  return loadNotes();
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes) {
    console.log(chalk.red.inverse("Duplicate note detected! Aborting..."));
    return;
  }

  notes.push({
    title: title,
    body: body,
  });

  saveNotes(notes);
  console.log(chalk.green.inverse("New note added!"));
};

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notesToKeep.length < notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse("Note removed!"));
  } else {
    console.log(
      chalk.red.inverse(
        `No note with the title: ${chalk.bold(title)} found! Aborting...`
      )
    );
    return;
  }
};

const saveNotes = function (notes) {
  fs.writeFileSync(dataFile, JSON.stringify(notes));
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync(dataFile);
    return JSON.parse(dataBuffer.toString());
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
