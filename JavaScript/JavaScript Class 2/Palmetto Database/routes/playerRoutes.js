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
  // ----------------- Player Login -----------------

  router.get("/getloggedout/", function (req, res) {
    res.cookie("token", 2, { maxAge: 0 });
    res.send({ redirect: "/login.html" });
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
        console.log("payload new:", payload.playerkey);
        viewpage = payload.playerkey;

        var sqlsel = "select * from Player where PlayerID = ?";
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

  router.post("/loginplayer/", function (req, res) {
    console.log("loginplayer");
    var twuemail = req.body.twplayeremail;
    var twupw = req.body.twplayerpw;

    var sqlsel = "select * from Player where PlayerEmail = ?";

    var inserts = [twuemail];

    var sql = mysql.format(sqlsel, inserts);
    console.log(sql);

    con.query(sql, function (err, data) {
      //Checks to see if there is data in the result
      if (data.length > 0) {
        console.log("Player name correct: ");
        var playerkey = data[0].PlayerID;
        console.log(data[0].PlayerID);

        bcrypt.compare(
          twupw,
          data[0].PlayerPassword,
          function (err, passwordCorrect) {
            if (err) {
              throw err;
            } else if (!passwordCorrect) {
              console.log("Password Incorrect");
            } else {
              console.log("Password Correct");
              const token = jwt.sign({ playerkey }, jwtKey, {
                algorithm: "HS256",
                expiresIn: jwtExpirySeconds,
              });

              res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 });
              res.send({ redirect: "home.html" });
            }
          }
        );
      } else {
        console.log("Incorrect player name or password!!");
      }
    });
  });

  //
  // ----------------- Gets All Players (update) -----------------

  router.get("/getplays/", function (req, res) {
    var sqlsel = "select * from Player";
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
  // ----------------- Gets Players Rewards -----------------

  router.get("/getplayrewards/", function (req, res) {
    var sqlsel = "SELECT * from Reward";
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
  // ----------------- Gets Single Player (update) -----------------

  router.get("/getsingleplay/", function (req, res) {
    console.log("Getting single player");
    var twpkey = req.query.twupplaykey;

    var sqlsel = "select * from Player where PlayerID = ?";
    var inserts = [twpkey];

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
  // ----------------- Update Single Players (update) -----------------

  router.post("/updatesingleplay", function (req, res) {
    var twpid = req.body.twupplayerid;
    var twpname = req.body.twupplayername;
    var twpfirstname = req.body.twupplayerfirstname;
    var twplastname = req.body.twupplayerlastname;
    var twpemail = req.body.twupplayeremail;
    var twpphone = req.body.twupplayerphone;
    var twpaddress = req.body.twupplayeraddress;
    var twphandicap = req.body.twupplayerhandicap;
    var twpreward = req.body.twupplayerreward;

    var sqlins =
      "UPDATE Player SET PlayerName = ?, PlayerFirstName = ?, PlayerLastName = ?, " +
      "PlayerEmail = ?, PlayerPhone = ?, PlayerAddress = ?, PlayerHandicap = ? , RewardID = ? " +
      "WHERE PlayerID = ?";
    var inserts = [
      twpname,
      twpfirstname,
      twplastname,
      twpemail,
      twpphone,
      twpaddress,
      twphandicap,
      twpreward,
      twpid,
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
  // ----------------- Searches All Players -----------------

  // Curently crashes the server, will fix later

  router.get("/getplay/", function (req, res) {
    var twpid = req.query.twplayerid;
    var twpname = req.query.twplayername;
    var twpfirstname = req.query.twplayerfirstname;
    var twplastname = req.query.twplayerlastname;
    var twpemail = req.query.twplayeremail;
    var twpphone = req.query.twplayerphone;
    var twpaddress = req.query.twplayeraddress;
    var twphandicap = req.query.twplayerhandicap;
    var twpreward = req.query.twplayerreward;

    console.log("Player ID: " + twpid);

    if (twpreward > 0) {
      var twrewardaddon = " and Player.RewardID = ?";
      var twrewardaddonvar = twpreward;
    } else {
      var twrewardaddon = " and Player.RewardID Like ?";
      var twrewardaddonvar = "%%";
    }

    var sqlsel =
      "SELECT Player.*, Reward.RewardName from Player " +
      "inner join Reward on Reward.RewardID = Player.RewardID " +
      "WHERE PlayerID Like ? and PlayerName Like ? and PlayerEmail Like ? " +
      "and PlayerFirstName Like ? and PlayerLastName Like ? " +
      "and PlayerPhone Like ? and PlayerAddress Like ?  and PlayerHandicap Like ? " +
      twrewardaddon;
    var inserts = [
      "%" + twpid + "%",
      "%" + twpname + "%",
      "%" + twpemail + "%",
      "%" + twpfirstname + "%",
      "%" + twplastname + "%",
      "%" + twpphone + "%",
      "%" + twpaddress + "%",
      "%" + twphandicap + "%",
      twrewardaddonvar,
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
  // ----------------- Inserts Player -----------------

  router.post("/player", function (req, res) {
    var twpname = req.body.twplayername;
    var twpemail = req.body.twplayeremail;
    var twpfirstname = req.body.twplayerfirstname;
    var twplastname = req.body.twplayerlastname;
    var twpphone = req.body.twplayerphone;
    var twpaddress = req.body.twplayeraddress;
    var twhandicap = req.body.twplayerhandicap;
    var twprewardName = req.body.twplayerreward;
    var twppw = req.body.twplayerpw;

    // gets the RewardID using the RewardName
    var rewardQuery = "SELECT RewardID FROM Reward WHERE RewardName = ?";
    con.query(rewardQuery, [twprewardName], function (err, rewardResults) {
      if (err) {
        console.error("Error fetching reward: ", err);
        res.status(500).send("Internal server error");
        return;
      }

      if (rewardResults.length === 0) {
        res.status(400).send("Reward does not exist.");
        return;
      }

      var twprewardID = rewardResults[0].RewardID;

      bcrypt.hash(twppw, 10, function (err, hashedPassword) {
        if (err) {
          console.log("Bad on encrypt");
          return;
        }

        var theHashedPW = hashedPassword;
        var sqlins =
          "INSERT INTO Player (PlayerName, PlayerEmail, PlayerFirstName, PlayerLastName, PlayerPhone, PlayerAddress, PlayerHandicap, RewardID, PlayerPassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        var inserts = [
          twpname,
          twpemail,
          twpfirstname,
          twplastname,
          twpphone,
          twpaddress,
          twhandicap,
          twprewardID,
          theHashedPW,
        ];
        var sql = mysql.format(sqlins, inserts);

        con.execute(sql, function (err, result) {
          if (err) {
            console.error("Error inserting player: ", err);
            res.status(500).send("Error inserting player");
            return;
          }
          console.log("1 record inserted");
          res.redirect("insertplayer.html");
          res.end();
        });
      });
    });
  });

  return router;
};
