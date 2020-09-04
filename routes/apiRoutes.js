const fs = require("fs");

//using uuid to create random ids https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require('uuid');

let userNotes = [];

// fs.readFile("./db/db.json", (error, data) => {
//     if (error) throw error;
//     below line?
//     // userNotes = (JSON.parse(data));
// } 
