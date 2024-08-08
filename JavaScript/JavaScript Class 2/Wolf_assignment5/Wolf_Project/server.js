"use strict";
var fs = require("fs");
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const mysql = require("mysql2");

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

app.post("/course", function (req, res) {
    var cfaculty = req.body.coursefaculty
    var csemester = req.body.coursesemester;
    var cyear = req.body.courseyear;
    var cprefix = req.body.courseprefix;
    var cnumber = req.body.coursenumber;
    var csection = req.body.coursesection;



    // Could not get UserName or UserId to insert ¯\_(ツ)_/¯ I tried
    var sqlins = "INSERT INTO Course (UserName, CourseSemester, CourseYear, CoursePrefix, CourseNumber, CourseSection) VALUES (?, ?, ?, ?, ?, ?)";
    var inserts = [cfaculty, csemester, cyear, cprefix, cnumber, csection];

    console.log(sqlins)

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


app.get("/getcorfaculty", function (req, res) {
  var sqlsel =
    "SELECT UserId AS dbcorfacultyid, UserName AS dbcorfacultyname FROM User";
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
