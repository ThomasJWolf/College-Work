"use strict";
var fs = require("fs");
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mysql = require("mysql2");
var bcrypt = require("bcrypt");

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
  res.sendFile(path.join(__dirname + "/public/login.html"));
});

app.post("/loginfac/", function (req, res) {
  var femail = req.body.useremail;
  var fpw = req.body.userpw;

  var sqlsel = "select * from User where UserEmail = ?";

  var inserts = [femail];

  var sql = mysql.format(sqlsel, inserts);
  console.log(sql);

  con.query(sql, function (err, data) {
    //Checks to see if there is data in the result
    if (data.length > 0) {
      console.log("User name correct: ");
      console.log(data[0].UserPassword);

      bcrypt.compare(
        fpw,
        data[0].UserPassword,
        function (err, passwordCorrect) {
          if (err) {
            throw err;
          } else if (!passwordCorrect) {
            console.log("Password Incorrect");
          } else {
            console.log("Password Correct");
            res.send({ redirect: "searchfaculty.html" });
          }
        }
      );
    } else {
      console.log("Incorrect user name or password!!");
    }
  });
});

app.post("/user", function (req, res) {
  var uname = req.body.username;
  var uemail = req.body.useremail;
  var upw = req.body.userpw;
  var uadmin = 0;
  console.log(uname);

  var saltRounds = 10;
  var theHashedPW = "";

  bcrypt.hash(upw, saltRounds, function (err, hashedPassword) {
    if (err) {
      console.log("Bad on encrypt");
      return;
    } else {
      theHashedPW = hashedPassword;
      console.log("Password Enc: " + theHashedPW);

      var sqlins =
        "INSERT INTO User (UserName, UserEmail, UserPassword, UserAdmin) VALUES (?, ?, ?, ?)";

      var inserts = [uname, uemail, theHashedPW, uadmin];

      var sql = mysql.format(sqlins, inserts);

      con.execute(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.redirect("insertfaculty.html");
        res.end();
      });
    }
  });
});

app.get("/getfac/", function (req, res) {
  console.log(req.query);
  var fid = req.query.facultyid;
  var fname = req.query.facultyname;
  var femail = req.query.facultyemail;

  // Corrected SQL SELECT statement with proper syntax and FROM clause
  var sqlsel =
    "SELECT * FROM User " +
    "WHERE UserId LIKE ? AND UserName LIKE ? AND UserEmail LIKE ?";

  var inserts = ["%" + fid + "%", "%" + fname + "%", "%" + femail + "%"];

  var sql = mysql.format(sqlsel, inserts);
  console.log(sql);

  con.query(sql, function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.send(JSON.stringify(data));
  });
});

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
  if (cfaculty === "0") {
    cfaculty = "";
  }
  var sqlsel =
    "Select Course.*, User.UserName from Course inner join User on User.UserId = Course.UserId " +
    "WHERE CourseId LIKE ? AND Course.UserId LIKE ? AND CourseSemester LIKE ? AND CourseYear LIKE ? AND CoursePrefix LIKE ? AND CourseNumber LIKE ? AND CourseSection LIKE ?";

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
    console.log(data);
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

app.post("/result", function (req, res) {
  var courseId = parseInt(req.body.courseId);
  var sloResults = req.body.sloResults; // This should be an array of SLOs, each with an array of indicators

  var insertPromises = [];

  // Loop through each SLO
  sloResults.forEach((slo) => {
    // Now loop through each indicator within this SLO
    slo.indicators.forEach((indicator) => {
      var rslo = slo.slo;
      var rindicator = indicator.indicator;
      var rthree = parseInt(indicator.scores.three);
      var rtwo = parseInt(indicator.scores.two);
      var rone = parseInt(indicator.scores.one);

      var sqlins =
        "INSERT INTO Result (ResultSlo, ResultIndicator, ResultThree, ResultTwo, ResultOne, CourseId) VALUES (?, ?, ?, ?, ?, ?)";
      var inserts = [rslo, rindicator, rthree, rtwo, rone, courseId];

      // Use a promise to handle asynchronous insert operation
      var insertPromise = new Promise(function (resolve, reject) {
        con.query(sqlins, inserts, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result.insertId);
          }
        });
      });

      insertPromises.push(insertPromise);
    });
  });

  // Use Promise.all to wait for all inserts to complete
  Promise.all(insertPromises)
    .then(function (results) {
      res.json({
        message: "All indicators inserted successfully",
        insertIds: results,
      });
    })
    .catch(function (err) {
      console.error(err);
      res.status(500).send("Error inserting results.");
    });
});

app.get("/getres/", function (req, res) {
  console.log(req.query);
  var cid = req.query.courseid;
  var cfaculty = req.query.coursefaculty;
  var csemester = req.query.coursesemester;
  var cyear = req.query.courseyear;
  var cprefix = req.query.courseprefix;
  var cnumber = req.query.coursenumber;
  var csection = req.query.coursesection;
  if (cfaculty === "0") {
    cfaculty = "";
  }
  var sqlsel =
    "Select Course.*, User.UserName from Course inner join User on User.UserId = Course.UserId " +
    "WHERE CourseId LIKE ? AND Course.UserId LIKE ? AND CourseSemester LIKE ? AND CourseYear LIKE ? AND CoursePrefix LIKE ? AND CourseNumber LIKE ? AND CourseSection LIKE ?";

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
    console.log(data);
    res.send(JSON.stringify(data));
  });
});

app.get("/rescourse/", function (req, res) {
  console.log(req.query);
  var cid = req.query.courseid;
  var sqlsel = "Select * FROM Course WHERE CourseId LIKE ?";

  var inserts = ["%" + cid + "%"];

  var sql = mysql.format(sqlsel, inserts);

  console.log(sql);

  con.query(sql, function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(data);
    res.send(JSON.stringify(data));
  });
});

app.get("/getrescourse", function (req, res) {
  var sqlsel = "SELECT CourseId, UserId FROM Course";
  var sql = mysql.format(sqlsel);
  console.log(sql + " jnvio0rewhnvriuevnert3hjvuhrteuberntvu enr59g");

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
