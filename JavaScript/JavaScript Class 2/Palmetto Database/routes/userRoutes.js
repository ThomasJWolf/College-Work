var express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const jwtKey = "my_secret";
const jwtExpirySeconds = 3000;

module.exports = function (con, bcrypt) {
  router.use(cookieParser());
  //
  // ----------------- User Login -----------------


  router.get("/getloggedout/", function (req, res) {
    res.cookie("token", 2, { maxAge: 0 });
    res.send({ redirect: "/backend/login.html" });
  });

  router.get("/getloggedin/", function (req, res) {
    console.log("getloggedin");
    var viewpage = 0;
    var datahold = [];
    const validtoken = req.cookies.token;
    console.log("token new:", validtoken);
    var payload;

    if (!validtoken) {
      viewpage = 0;
      console.log("NVT");
    } else {
      try {
        payload = jwt.verify(validtoken, jwtKey);
        console.log("payload new:", payload.userkey);
        viewpage = payload.userkey;

        var sqlsel = "select * from User where UserID = ?";
        var inserts = [viewpage];

        var sql = mysql.format(sqlsel, inserts);

        con.query(sql, function (err, data) {
          if (err) {
            console.error("ERROR " + err);
            process.exit(1);
          }
          console.log("Show 1" + data);

          datahold = data;

          res.send(JSON.stringify(data));
        });
      } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
          viewpage = 0;
          console.log("NVT2");
        }
        viewpage = 0;
        console.log("NVT3");
      }
    }
  });

  router.post("/loginuser/", function (req, res) {
    console.log("loginuser");
    var twuemail = req.body.twuseremail;
    var twupw = req.body.twuserpw;

    var sqlsel = "select * from User where UserEmail = ?";

    var inserts = [twuemail];

    var sql = mysql.format(sqlsel, inserts);
    console.log(sql);

    con.query(sql, function (err, data) {
      //Checks to see if there is data in the result
      if (data.length > 0) {
        console.log("User name correct: ");
        var userkey = data[0].UserID;
        console.log(data[0].UserID);

        bcrypt.compare(
          twupw,
          data[0].UserPassword,
          function (err, passwordCorrect) {
            if (err) {
              throw err;
            } else if (!passwordCorrect) {
              console.log("Password Incorrect");
            } else {
              console.log("Password Correct");
              const token = jwt.sign({ userkey }, jwtKey, {
                algorithm: "HS256",
                expiresIn: jwtExpirySeconds,
              });

              res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 });
              res.send({ redirect: "home.html" });
            }
          }
        );
      } else {
        console.log("Incorrect user name or password!!");
      }
    });
  });

  //
  // ----------------- Gets All Users (update) -----------------

  router.get("/getusrs/", function (req, res) {
    var sqlsel = "select * from User";
    var sql = mysql.format(sqlsel);

    con.query(sql, function (err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      res.send(JSON.stringify(data));
    });
  });

  //
  // ----------------- Gets Users Roles -----------------

  router.get("/getusrroles/", function (req, res) {
    var sqlsel = "SELECT * FROM Role";
    var sql = mysql.format(sqlsel);

    con.query(sql, function (err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.send(JSON.stringify(data));
    });
  });

  //
  // ----------------- Gets Single User (update) -----------------

  router.get("/getsingleusr/", function (req, res) {
    console.log("getsingleusr");
    var twukey = req.query.twupusrkey;

    var sqlsel = "select * from User where UserID = ?";
    var inserts = [twukey];

    var sql = mysql.format(sqlsel, inserts);

    con.query(sql, function (err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      res.send(JSON.stringify(data));
    });
  });

  //
  // ----------------- Update Single Users (update) -----------------

  router.post("/updatesingleusr", function (req, res) {
    var twuid = req.body.twupuserid;
    var twuname = req.body.twupusername;
    var twuemail = req.body.twupuseremail;
    var twufirstname = req.body.twupuserfirstname;
    var twulastname = req.body.twupuserlastname;
    var twuphone = req.body.twupuserphone;
    var twuaddress = req.body.twupuseraddress;
    var twurole = req.body.twupuserrole;

    var sqlins =
      "UPDATE User SET UserName = ?, UserEmail = ?, UserFirstName = ?, " +
      "UserLastName = ?, UserPhone = ?, UserAddress = ?, RoleID = ? " +
      "WHERE UserID = ?";
    var inserts = [
      twuname,
      twuemail,
      twufirstname,
      twulastname,
      twuphone,
      twuaddress,
      twurole,
      twuid,
    ];
    var sql = mysql.format(sqlins, inserts);
    console.log(sql);
    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record updated");

      res.end();
    });
  });

  //
  // ----------------- Searches All Users -----------------

  // Curently crashes the server, will fix later

  router.get("/getusr/", function (req, res) {
    var twuid = req.query.twuserid;
    var twuname = req.query.twusername;
    var twuemail = req.query.twuseremail;
    var twufirstname = req.query.twuserfirstname;
    var twulastname = req.query.twuserlastname;
    var twuphone = req.query.twuserphone;
    var twuaddress = req.query.twuseraddress;
    var twurole = req.query.twuserrole;

    if (twurole > 0) {
      var twroleaddon = " and User.RoleID = ?";
      var twroleaddonvar = twurole;
    } else {
      var twroleaddon = " and User.RoleID Like ?";
      var twroleaddonvar = "%%";
    }

    var sqlsel =
      "SELECT User.*, Role.RoleName from User " +
      "inner join Role on Role.RoleID = User.RoleID " +
      "WHERE UserID Like ? and UserName Like ? and UserEmail Like ? " +
      "and UserFirstName Like ? and UserLastName Like ? " +
      "and UserPhone Like ? and UserAddress Like ? " +
      twroleaddon;
    var inserts = [
      "%" + twuid + "%",
      "%" + twuname + "%",
      "%" + twuemail + "%",
      "%" + twufirstname + "%",
      "%" + twulastname + "%",
      "%" + twuphone + "%",
      "%" + twuaddress + "%",
      twroleaddonvar,
    ];

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

  //
  // ----------------- Inserts User -----------------

  router.post("/user", function (req, res) {
    var twuname = req.body.twusername;
    var twuemail = req.body.twuseremail;
    var twufirstname = req.body.twuserfirstname;
    var twulastname = req.body.twuserlastname;
    var twuphone = req.body.twuserphone;
    var twuaddress = req.body.twuseraddress;
    var twuroleName = req.body.twuserrole; // This is the role name
    var twupw = req.body.twuserpw;

    // gets the RoleID using the RoleName
    var roleQuery = "SELECT RoleID FROM Role WHERE RoleName = ?";
    con.query(roleQuery, [twuroleName], function (err, roleResults) {
      if (err) {
        console.error("Error fetching role: ", err);
        res.status(500).send("Internal server error");
        return;
      }

      if (roleResults.length === 0) {
        res.status(400).send("Role does not exist.");
        return;
      }

      var twuroleID = roleResults[0].RoleID;

      bcrypt.hash(twupw, 10, function (err, hashedPassword) {
        if (err) {
          console.log("Bad on encrypt");
          return;
        }

        var theHashedPW = hashedPassword;
        var sqlins =
          "INSERT INTO User (UserName, UserEmail, UserFirstName, UserLastName, " +
          "RoleID, UserPassword, UserPhone, UserAddress) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        var inserts = [
          twuname,
          twuemail,
          twufirstname,
          twulastname,
          twuroleID,
          theHashedPW,
          twuphone,
          twuaddress,
        ];
        var sql = mysql.format(sqlins, inserts);

        con.execute(sql, function (err, result) {
          if (err) {
            console.error("Error inserting user: ", err);
            res.status(500).send("Error inserting user");
            return;
          }
          console.log("1 record inserted");
          res.redirect("insertuser.html");
          res.end();
        });
      });
    });
  });

  return router;
};
