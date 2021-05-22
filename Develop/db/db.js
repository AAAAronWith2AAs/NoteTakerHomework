const util = require("util");
const fs = require("fs");
const readFileSync = util.promisify(fs.readFile);
const writeFileSync = util.promisify(fs.writeFile);

class Db {
  read() {
    readFileSync("db/db.json", "utf8");
  }
  write(note) {
    return writeFileSync("db/db.json", JSON.stringify(note));
  }
  getNotes() {
    //write stuff here
    return this.read().then((notes) => {
      //notes in arr, concat and parse, if none return empty arr
    });
  }
  addNotes(note) {
    //first get notes when return   this.getNotes
    const { title, text } = note; //create title var with unique ID. Return - get note, take new notes, update new note into current note, return
  }
}

module.exports = new Db();
