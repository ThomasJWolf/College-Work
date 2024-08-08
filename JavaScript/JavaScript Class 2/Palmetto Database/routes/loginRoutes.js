var express = require("express");
const router = express.Router();
const mysql = require("mysql2");


module.exports = function (con, bcrypt) {

router.get("/getloggedout/", function (req, res) {
  res.cookie("token", 2, { maxAge: 0 });
  res.send({ redirect: "/public/backend/login/loginuser.html" });
});

router.get("/getloggedin/", function (req, res) {
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
      console.log("payload new:", payload.playkey);
      viewpage = payload.playkey;

      var sqlsel = "select * from Player where PlayerID = ?";
      var inserts = [viewpage];

      var sql = mysql.format(sqlsel, inserts);

      con.query(sql, function (err, data) {
        if (err) {
          console.error(err);
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

router.post("/loginplay/", function (req, res) {
  var twpemail = req.body.twplayeremail;
  var twppw = req.body.twplayerpw;

  var sqlsel = "select * from Player where PlayerEmail = ?";

  var inserts = [twpemail];

  var sql = mysql.format(sqlsel, inserts);
  console.log(sql);

  con.query(sql, function (err, data) {
    //Checks to see if there is data in the result
    if (data.length > 0) {
      console.log("User name correct: ");
      var playkey = data[0].PlayerID;
      console.log(data[0].PlayerID);

      bcrypt.compare(
        twppw,
        data[0].PlayerPassword,
        function (err, passwordCorrect) {
          if (err) {
            throw err;
          } else if (!passwordCorrect) {
            console.log("Password Incorrect");
          } else {
            console.log("Password Correct");
            const token = jwt.sign({ playkey }, jwtKey, {
              algorithm: "HS256",
              expiresIn: jwtExpirySeconds,
            });

            res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 });
            res.send({ redirect: "public/backend/player/searchplayer.html" });
          }
        }
      );
    } else {
      console.log("Incorrect user name or password!!");
    }
  });
});
  
  return router;
};
