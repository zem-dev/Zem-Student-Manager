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

// Allows use of .env variables
require("dotenv").config();

// Library for hashing
const bcrypt = require("bcrypt");
const saltRounds = 10;

const URL = `mongodb+srv://admin:${process.env.PASSWORD}@cluster.11fwl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// Make connection to mongoose
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const studentSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  schedule: Array, // Schedule is an array of subject  objects
  gpa: Number,
  email: String,
  studentId: Number,
});
const Student = mongoose.model("Student", studentSchema);

// Handles get request for getting data for a specific student
app.get("/api/students/:studentId", (req, res) => {
  // Searches the database for Student models with the matching id
  Student.find({ studentId: req.params.studentId })
    .then((result) => {
      // Responds with the found student data in json
      res.json(result);
    })
    .catch((error) => {
      // Handle error
      console.log(error);
    });
});

// POST request for creating new students
app.post("/api/students", (req, res) => {
  const grades = req.body.grades;

  // calculate gpa
  let valuesAdded = 0;

  for (i = 0; i < grades.length; i++) {
    const grade = grades[i];
    let val = 0;
    switch (grade) {
      case "A":
        val = 4;
        break;
      case "B":
        val = 3;
        break;
      case "C":
        val = 2;
        break;
      case "D":
        val = 1;
        break;
      case "F":
        val = 0;
        break;
    }
    valuesAdded += val;
  }
  let finalGpa = valuesAdded / grades.length;

  new Student({
    gpa: undefined, // undefined is placeholder
    password: bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      return hash;
    }),
  }).save((result) => {
    console.log("successfully saved student to database").catch((error) => {
      console.log(error);
    });
  });
});

app.get("/api/announcements", (req, res) =>{
  // for the post request
  const announcements = req.body.Announcements;
  for (i=0; i < announcements.length; i++) {
    const announcement = announcements[0];
    res.write(announcement.date);
    res.write(announcement.title); //placeholder for showing announcemtns
    res.write(announcemnt.body);
  }
  console.log("pizza and obama fun time party yay!"); // special feature DO NOT DELETE
})

app.post("/api/createAnnouncement/:studetnId", (res, req) => {
  let options = {
    month: "long",
    day: "long",
    year: "long"
  }
  
  function Announcement (title, body) { // is it just me or is the constructor function looking kind of tasty
    this.title = title,
    this.body = body,
    this.date = new Date().toLocaleDateString("en-US", options) 
  }

  Student.find({ studentId: req.params.studentId })
    .then((response) => {
      if (response.isAdmin) {
        const currentAnnouncements = req.body.announcements;
        currentAnnouncements.push(new Announcement(res.title, res.body));
        res.redirect("/api/createAnnouncement/" + response.id);
      } else {
        res.write("Sorry your not admin loser.")
      }
    })
    .catch((error) => {
      console.log(error);
    })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
