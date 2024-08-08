"use strict";
var fs = require("fs");
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mysql = require("mysql");

const con = mysql.createConnection({
  host: "istwebclass.org",
  user: "twolf1_Thomas",
  password: "mKVXe_UbFSvh",
  database: "twolf1_EPIC",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.set("port", process.env.PORT || 3000);

app.use("/", express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/insertuser.html"));
});

app.post("/user", function (req, res) {
  var uname = req.body.username;
  var uemail = req.body.useremail;
  var upassword = "zzzzz";
  var uadmin = 0;
  console.log(uname);

  var sqlins =
    "INSERT INTO User (UserName, UserEmail, UserPassword, UserAdmin) VALUES (?, ?, ?, ?)";

  var inserts = [uname, uemail, upassword, uadmin];

  var sql = mysql.format(sqlins, inserts);

  con.execute(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.redirect("insertfaculty.html");
    res.end();
  });
});

<<<<<<< HEAD
app.get("/getfac/", function (req, res) {
=======
app.get('/getfac/', function (req, res) {
>>>>>>> 8a85690e63f6e08c9476eedbebe4feaa8fb0ce6d
  console.log(req.query);
  var fid = req.query.facultyid;
  var fname = req.query.facultyname;
  var femail = req.query.facultyemail;
<<<<<<< HEAD

  // Corrected SQL SELECT statement with proper syntax and FROM clause
  var sqlsel =
    "SELECT * FROM User " +
    "WHERE UserId LIKE ? AND UserName LIKE ? AND UserEmail LIKE ?";

  var inserts = ["%" + fid + "%", "%" + fname + "%", "%" + femail + "%"];

=======
  
  // Corrected SQL SELECT statement with proper syntax and FROM clause
  var sqlsel = 'SELECT * FROM User ' +
               'WHERE UserId LIKE ? AND UserName LIKE ? AND UserEmail LIKE ?';
  
  var inserts = ['%' + fid + '%', '%' + fname + '%', '%' + femail + '%'];
  
>>>>>>> 8a85690e63f6e08c9476eedbebe4feaa8fb0ce6d
  var sql = mysql.format(sqlsel, inserts);
  console.log(sql);

  con.query(sql, function (err, data) {
<<<<<<< HEAD
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.send(JSON.stringify(data));
  });
});

=======
      if (err) {
          console.error(err);
          process.exit(1);
      }
      res.send(JSON.stringify(data));
  });
});



>>>>>>> 8a85690e63f6e08c9476eedbebe4feaa8fb0ce6d
app.post("/course", function (req, res) {
  var cfaculty = req.body.coursefaculty;
  var csemester = req.body.coursesemester;
  var cyear = req.body.courseyear;
  var cprefix = req.body.courseprefix;
  var cnumber = req.body.coursenumber;
  var csection = req.body.coursesection;

  var sqlins =
    "INSERT INTO Course (UserId, CourseSemester, CourseYear, CoursePrefix, CourseNumber, CourseSection) VALUES (?, ?, ?, ?, ?, ?)";
  var inserts = [cfaculty, csemester, cyear, cprefix, cnumber, csection];

  console.log(sqlins);

  con.query(sqlins, inserts, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).send("Error inserting course.");
    }
    console.log("1 record inserted");
    res.redirect("insertfaculty.html");
    res.end();
  });
});

app.get("/getcor/", function (req, res) {
  console.log(req.query);
  var cid = req.query.courseid;
  var cfaculty = req.query.coursefaculty;
  var csemester = req.query.coursesemester;
  var cyear = req.query.courseyear;
  var cprefix = req.query.courseprefix;
  var cnumber = req.query.coursenumber;
  var csection = req.query.coursesection;
<<<<<<< HEAD
  if (cfaculty === "0") {
    cfaculty = "";
  }
  var sqlsel =
    "Select Course.*, User.UserName from Course inner join User on User.UserId = Course.UserId " +
    "WHERE CourseId LIKE ? AND Course.UserId LIKE ? AND CourseSemester LIKE ? AND CourseYear LIKE ? AND CoursePrefix LIKE ? AND CourseNumber LIKE ? AND CourseSection LIKE ?";
=======

  var sqlsel =
  'SELECT * FROM Course ' +
  "WHERE CourseId LIKE ? AND UserId LIKE ? AND CourseSemester LIKE ? AND CourseYear LIKE ? AND CoursePrefix LIKE ? AND CourseNumber LIKE ? AND CourseSection LIKE ?";
>>>>>>> 8a85690e63f6e08c9476eedbebe4feaa8fb0ce6d

  var inserts = [
    "%" + cid + "%",
    "%" + cfaculty + "%",
    "%" + csemester + "%",
    "%" + cyear + "%",
    "%" + cprefix + "%",
    "%" + cnumber + "%",
    "%" + csection + "%",
  ];

  var sql = mysql.format(sqlsel, inserts);

  console.log(sql);

  con.query(sql, function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
<<<<<<< HEAD
    console.log(data);
=======
>>>>>>> 8a85690e63f6e08c9476eedbebe4feaa8fb0ce6d
    res.send(JSON.stringify(data));
  });
});

app.get("/getcorfaculty", function (req, res) {
  var sqlsel = "SELECT UserId, UserName FROM User";
  var sql = mysql.format(sqlsel);

  con.query(sql, function (err, data) {
    if (err) {
      console.error(err);
      return res.status(500).send("Error on the server.");
    }
    res.send(JSON.stringify(data));
  });
});

app.listen(app.get("port"), function () {
  console.log("Server started: http://localhost:" + app.get("port") + "/");
});
