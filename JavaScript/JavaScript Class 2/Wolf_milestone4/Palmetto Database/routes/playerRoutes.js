var express = require("express");
const router = express.Router();
const mysql = require("mysql2");

module.exports = function (con, bcrypt) {
  //
  // ----------------- Player Login -----------------

  router.post("/loginplay/", function (req, res) {
    var cemail = req.body.playeremail;
    var cpw = req.body.playerpw;

    var sqlsel = "select * from Player where PlayerEmail = ?";

    var inserts = [cemail];

    var sql = mysql.format(sqlsel, inserts);
    console.log(sql);

    con.query(sql, function (err, data) {
      //Checks to see if there is data in the result
      if (data.length > 0) {
        console.log("Player name correct: ");
        console.log(data[0].PlayerPassword);

        bcrypt.compare(
          cpw,
          data[0].PlayerPassword,
          function (err, passwordCorrect) {
            if (err) {
              throw err;
            } else if (!passwordCorrect) {
              console.log("Password Incorrect");
            } else {
              console.log("Password Correct");
              res.send({ redirect: "/insertplayer.html" });
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
    var twpkey = req.query.upplaykey;

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
    var twpid = req.body.playerid;
    var twpname = req.body.playername;
    var twpfirstname = req.body.playerfirstname;
    var twplastname = req.body.playerlastname;
    var twpemail = req.body.playeremail;
    var twpphone = req.body.playerphone;
    var twpaddress = req.body.playeraddress;
    var twphandicap = req.body.playerhandicap;
    var twpreward = req.body.playerreward;

    var sqlins =
      "UPDATE Player SET PlayerName = ?, PlayerFirstName = ?, PlayerLastName = ?, " +
      "PlayerEmail = ?, PlayerPhone = ?, PlayerAddress = ?, PlayerHandicap = ? , PlayerReward = ? " +
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
