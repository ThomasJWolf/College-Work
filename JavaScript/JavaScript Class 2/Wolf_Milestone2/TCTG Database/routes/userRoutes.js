var express = require("express");
const router = express.Router();
const mysql = require("mysql2");

module.exports = function (con, bcrypt) {
  //
  // ----------------- User Login -----------------

  router.post("/loginuser/", function (req, res) {
    var eemail = req.body.useremail;
    var epw = req.body.userpw;

    var sqlsel = "select * from User where UserEmail = ?";

    var inserts = [eemail];

    var sql = mysql.format(sqlsel, inserts);
    console.log(sql);

    con.query(sql, function (err, data) {
      //Checks to see if there is data in the result
      if (data.length > 0) {
        console.log("User name correct: ");
        console.log(data[0].UserPassword);

        bcrypt.compare(
          epw,
          data[0].UserPassword,
          function (err, passwordCorrect) {
            if (err) {
              throw err;
            } else if (!passwordCorrect) {
              console.log("Password Incorrect");
            } else {
              console.log("Password Correct");
              res.send({ redirect: "/backend/searchuser.html" });
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

  router.get("/getusers/", function (req, res) {
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

  router.get("/getuserroles/", function (req, res) {
    var sqlsel = "SELECT * FROM Role";
    var sql = mysql.format(sqlsel);

    con.query(sql, function (err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.send(JSON.stringify(data));
      console.log(data);
    });
  });

  //
  // ----------------- Gets Single User (update) -----------------

  router.get("/getsingleuser/", function (req, res) {
    var ukey = req.query.upuserkey;

    var sqlsel = "select * from User where UserID = ?";
    var inserts = [ukey];

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

  router.post("/updatesingleuser", function (req, res) {
    var uid = req.body.upuserid;
    var uname = req.body.upusername;
    var uemail = req.body.upuseremail;
    var ufirstname = req.body.upuserfirstname;
    var ulastname = req.body.upuserlastname;
    var uphone = req.body.upuserphone;
    var uaddress = req.body.upuseraddress;
    var urole = req.body.upuserrole;

    var sqlins =
      "UPDATE User SET UserName = ?, UserEmail = ?, UserFirstName = ?, " +
      "UserLastName = ?, UserPhone = ?, UserAddress = ?, RoleID = ? " +
      "WHERE UserID = ?";
    var inserts = [
      uname,
      uemail,
      ufirstname,
      ulastname,
      uphone,
      uaddress,
      urole,
      uid,
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

  // router.get("/getuser/", function (req, res) {
  //   var uid = req.query.userid;
  //   var uname = req.query.username;
  //   var uemail = req.query.useremail;
  //   var ufirstname = req.query.userfirstname;
  //   var ulastname = req.query.userlastname;
  //   var uphone = req.query.userphone;
  //   var uaddress = req.query.useraddress;
  //   var urole = req.query.userrole;

  //   if (urole > 0) {
  //     var roleaddon = " and RoleID = ?";
  //     var roleaddonvar = urole;
  //   } else {
  //     var roleaddon = " and RoleID Like ?";
  //     var roleaddonvar = "%%";
  //   }

  //   var sqlsel =
  //     "SELECT User.*, Role.RoleName from User " +
  //     "inner join Role on Role.RoleID = User.RoleID " +
  //     "WHERE UserID Like ? and UserName Like ? and UserEmail Like ? " +
  //     "and UserFirstName Like ? and UserLastName Like ? " +
  //     "and UserPhone Like ? and UserAddress Like ? " +
  //     roleaddon;
  //   var inserts = [
  //     "%" + uid + "%",
  //     "%" + uname + "%",
  //     "%" + uemail + "%",
  //     "%" + ufirstname + "%",
  //     "%" + ulastname + "%",
  //     "%" + uphone + "%",
  //     "%" + uaddress + "%",
  //     roleaddonvar,
  //   ];

  //   var sql = mysql.format(sqlsel, inserts);

  //   console.log(sql);

  //   con.query(sql, function (err, data) {
  //     if (err) {
  //       console.error(err);
  //       process.exit(1);
  //     }
  //     res.send(JSON.stringify(data));
  //   });
  // });

  //
  // ----------------- Inserts User -----------------

  router.post("/user", function (req, res) {
    var uname = req.body.username;
    var uemail = req.body.useremail;
    var ufirstname = req.body.userfirstname;
    var ulastname = req.body.userlastname;
    var uphone = req.body.userphone;
    var uaddress = req.body.useraddress;
    var urole = req.body.userrole;
    var upw = req.body.userpw;

    console.log("PW: " + upw);

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
          "INSERT INTO User (UserName, UserEmail, UserFirstName, UserLastName, " +
          "RoleID, UserPassword, UserPhone, UserAddress) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        var inserts = [
          uname,
          uemail,
          ufirstname,
          ulastname,
          urole,
          theHashedPW,
          uphone,
          uaddress,
        ];
        var sql = mysql.format(sqlins, inserts);

        con.execute(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
          res.redirect("insertuser.html");
          res.end();
        });
      }
    });
  });

  return router;
};
