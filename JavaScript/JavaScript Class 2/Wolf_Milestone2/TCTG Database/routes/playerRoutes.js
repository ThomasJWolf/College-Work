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
        console.log("User name correct: ");
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
        console.log("Incorrect user name or password!!");
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
  // ----------------- Gets Players Roles -----------------

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
    var pkey = req.query.upplaykey;

    var sqlsel = "select * from Player where PlayerID = ?";
    var inserts = [pkey];

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
    var pid = req.body.playerid;
    var pname = req.body.playername;
    var pfirstname = req.body.playerfirstname;
    var plastname = req.body.playerlastname;
    var pemail = req.body.playeremail;
    var pphone = req.body.playerphone;
    var paddress = req.body.playeraddress;
    var phandicap = req.body.playerhandicap;
    var preward = req.body.playerreward;

    var sqlins =
      "UPDATE Player SET PlayerName = ?, PlayerFirstName = ?, PlayerLastName = ?, " +
      "PlayerEmail = ?, PlayerPhone = ?, PlayerAddress = ?, PlayerHandicap = ? , PlayerReward = ? " +
      "WHERE PlayerID = ?";
    var inserts = [
      pname,
      pfirstname,
      plastname,
      pemail,
      pphone,
      paddress,
      phandicap,
      preward,
      pid,
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

  // router.get("/getplay/", function (req, res) {
  //   var pid = req.query.upplayerid;
  //   var pname = req.query.upplayername;
  //   var pfirstname = req.query.upplayerfirstname;
  //   var plastname = req.query.upplayerlastname;
  //   var pemail = req.query.upplayeremail;
  //   var pphone = req.query.upplayerphone;
  //   var paddress = req.query.upplayeraddress;
  //   var phandicap = req.query.upplayerhandicap;
  //   var preward = req.query.upplayerreward;

  //   console.log("Player ID: " + pid);

  //   if (preward > 0) {
  //     var rewardaddon = " and RewardID = ?";
  //     var rewardaddonvar = preward;
  //   } else {
  //     var rewardaddon = " and RewardID Like ?";
  //     var rewardaddonvar = "%%";
  //   }

  //   var sqlsel =
  //     "SELECT Player.*, Reward.RewardName from Player " +
  //     "inner join Reward on Reward.RewardID = Player.PlayerReward " +
  //     "WHERE PlayerID Like ? and PlayerName Like ? and PlayerEmail Like ? " +
  //     "and PlayerFirstName Like ? and PlayerLastName Like ? " +
  //     "and PlayerPhone Like ? and PlayerAddress Like ?  and PlayerHandicap Like ? " +
  //     rewardaddon;
  //   var inserts = [
  //     "%" + pid + "%",
  //     "%" + pname + "%",
  //     "%" + pemail + "%",
  //     "%" + pfirstname + "%",
  //     "%" + plastname + "%",
  //     "%" + pphone + "%",
  //     "%" + paddress + "%",
  //     "%" + phandicap + "%",
  //     rewardaddonvar,
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
  // ----------------- Inserts Player -----------------

  router.post("/player", function (req, res) {
    var pname = req.body.playername;
    var pfirstname = req.body.playerfirstname;
    var plastname = req.body.playerlastname;
    var pemail = req.body.playeremail;
    var pphone = req.body.playerphone;
    var paddress = req.body.playeraddress;
    var phandicap = req.body.playerhandicap;
    var preward = req.body.playerreward;
    var ppw = req.body.playerpw;
    console.log("PW: " + ppw);

    var saltRounds = 10;
    var theHashedPW = "";

    bcrypt.hash(ppw, saltRounds, function (err, hashedPassword) {
      if (err) {
        console.log("Bad on encrypt");
        return;
      } else {
        theHashedPW = hashedPassword;
        console.log("Password Enc: " + theHashedPW);

        var sqlins =
          "INSERT INTO Player (PlayerName, PlayerPassword, PlayerFirstName, PlayerLastName, " +
          "PlayerEmail, PlayerPhone, PlayerAddress, PlayerHandicap, PlayerReward) " +
          "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        var inserts = [
          pname,
          theHashedPW,
          pfirstname,
          plastname,
          pemail,
          pphone,
          paddress,
          phandicap,
          preward,
        ];
        var sql = mysql.format(sqlins, inserts);

        con.execute(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
          res.redirect("insertplayer.html");
          res.end();
        });
      }
    });
  });

  return router;
};
