var express = require("express");
const router = express.Router();
const mysql = require("mysql2");

module.exports = function (con, bcrypt) {
  //
  // ----------------- Gets All Reservations (update) -----------------

  router.get("/getress/", function (req, res) {
    var sqlsel = "select * from Reservation";
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
  // ----------------- Gets Reservations Roles -----------------

  router.get("/getresstatuss/", function (req, res) {
    var sqlsel = "SELECT * from Status";
    var sql = mysql.format(sqlsel);

    con.query(sql, function (err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      res.send(JSON.stringify(data));
    });
  });
  router.get("/getresusers/", function (req, res) {
    var sqlsel = "SELECT UserID, UserName from User";
    var sql = mysql.format(sqlsel);

    con.query(sql, function (err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      res.send(JSON.stringify(data));
    });
  });

  router.get("/getresplayers/", function (req, res) {
    var sqlsel = "SELECT PlayerID, PlayerName from Player";
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
  // ----------------- Gets Single Reservation (update) -----------------

  router.get("/getsingleres/", function (req, res) {
    var twrkey = req.query.twupreskey;

    var sqlsel = "select * from Reservation where ReservationID = ?";
    var inserts = [twrkey];

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
  // ----------------- Update Single Reservations (update) -----------------

  router.post("/updatesingleres", function (req, res) {
    console.log(req.body);
    var twrid = req.body.twupreservationid;
    var twruser = req.body.twupreservationuser;
    var twrplayer = req.body.twupreservationplayer;
    var twrdate = req.body.twupreservationdate;
    var twrtime = req.body.twupreservationtime;
    var twrstatus = req.body.twupreservationstatus;

    var sqlins =
      "UPDATE Reservation SET UserID = ?, PlayerID = ?, ReservationDate = ?, ReservationTime = ?, StatusID = ? WHERE ReservationID = ?";
    var inserts = [twruser, twrplayer, twrdate, twrtime, twrstatus, twrid];
    var sql = mysql.format(sqlins, inserts);
    console.log(sql);
    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record updated");

      res.end();
    });
  });

  //
  // ----------------- Searches All Reservations -----------------

  router.get("/getres/", function (req, res) {
    var twrid = req.query.twreservationid;
    var twruser = req.query.twreservationuser;
    var twrplayer = req.query.twreservationplayer;
    var twrdate = req.query.twreservationdate;
    var twrtime = req.query.twreservationtime;
    var twrstatus = req.query.twreservationstatus;
    console.log("id:" + twrid + " user:" + twruser + " player:" + twrplayer + " date:" + twrdate + " time:" + twrtime + " status:" + twrstatus);

    if (twruser > 0) {
      var twuseraddon = " and Reservation.UserID = ?";
      var twuseraddonvar = twruser;
    } else {
      var twuseraddon = " and Reservation.UserID Like ?";
      var twuseraddonvar = "%%";
    }

    if (twrplayer > 0) {
      var twplayeraddon = " and Reservation.PlayerID = ?";
      var twplayeraddonvar = twrplayer;
    } else {
      var twplayeraddon = " and Reservation.PlayerID Like ?";
      var twplayeraddonvar = "%%";
    }

    if (twrstatus > 0) {
      var twstatusaddon = " and Reservation.StatusID = ?";
      var twstatusaddonvar = twrstatus;
    } else {
      var twstatusaddon = " and Reservation.StatusID Like ?";
      var twstatusaddonvar = "%%";
    }
    

    var sqlsel =
      "SELECT Reservation.*, Status.StatusName, User.UserName, Player.PlayerName from Reservation " +
      "inner join Status on Status.StatusID = Reservation.StatusID " +
      "inner join User on User.UserID = Reservation.UserID " +
      "inner join Player on Player.PlayerID = Reservation.PlayerID " +
      "WHERE ReservationID Like ? and ReservationDate Like ? and ReservationTime Like ?" +
      twuseraddon +
      twplayeraddon +
      twstatusaddon;
    var inserts = [
      "%" + twrid + "%",
      "%" + twrdate + "%",
      "%" + twrtime + "%",
      twuseraddonvar,
      twplayeraddonvar,
      twstatusaddonvar,
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
  // ----------------- Inserts Reservation -----------------

  router.post("/reservation", function (req, res) {
    var twruser = req.body.twreservationuser;
    var twrplayer = req.body.twreservationplayer;
    var twrdate = req.body.twreservationdate;
    var twrtime = req.body.twreservationtime;
    var twrstatus = req.body.twreservationstatus;

    var sqlins =
      "INSERT INTO Reservation (UserID, PlayerID, ReservationDate, ReservationTime, StatusID) VALUES (?, ?, ?, ?, ?)";

    var inserts = [twruser, twrplayer, twrdate, twrtime, twrstatus];
    var sql = mysql.format(sqlins, inserts);

    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.redirect("insertreservation.html");
      res.end();
    });
  });

  return router;
};
