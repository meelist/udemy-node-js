const fs = require("fs");
const chalk = require("chalk");
const dataFile = "notes.json";

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Duplicate note detected! Aborting..."));
    return;
  }
};

const removeNote = (title) => {
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

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse("Your notes"));
  notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(`${chalk.yellow.inverse(note.title)}: ${note.body}`);
  } else {
    console.log(
      chalk.red.inverse(`Note with title: ${chalk.bold(title)} not found!`)
    );
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync(dataFile, JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync(dataFile);
    return JSON.parse(dataBuffer.toString());
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
