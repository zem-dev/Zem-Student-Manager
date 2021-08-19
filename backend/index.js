/* 
Note for developers:
In your terminal run "npm run dev"
This will start the api using nodemon, nodemon restarts the server every time
changes are made to index.js, that way you wont have to write
$ node index.js 
every time you want to view your change
*/

const express = require("express");
const app = express();
const PORT = 3001;

// Importing express middleware
const cors = require("cors");

// Use express middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mongoose
const mongoose = require("mongoose");
const { request } = require("express");

const studentSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  schedule: Array, // Schedule is an array of subject  objects
  gpa: Number,
  email: String,
  studentId: Number
});

const Student = mongoose.model("Student", studentSchema);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
