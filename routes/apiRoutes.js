const fs = require("fs");

//using uuid to create random ids https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require('uuid');

let userNotes = [];

fs.readFile("./db/db.json", (error, data) => {
    if (error) throw error;
    userNotes = (JSON.parse(data));
}); 

function changeNote() {
        fs.writeFile("./db/db.json", JSON.stringify(userNotes), (error) => {
            if (error) throw error;
        });
    }

function getNotes(notes) {
    notes.get("/api/notes", (request, response) => {
        response.json(userNotes);
    });

    notes.post("/api/notes", (request, response) => {
        const anotherNote = request.body;
        anotherNote.id = (uuidv4());
        userNotes.push(anotherNote);
        changeNote();
        response.send(userNotes);
    });
}

module.exports = getNotes;
