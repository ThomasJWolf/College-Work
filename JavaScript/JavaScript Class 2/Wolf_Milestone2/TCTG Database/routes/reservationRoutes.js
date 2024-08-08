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
    var rkey = req.query.upreskey;

    var sqlsel = "select * from Reservation where ReservationID = ?";
    var inserts = [rkey];

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
    var rid = req.body.reservationid;
    var ruser = req.body.reservationuser;
    var rplayer = req.body.reservationplayer;
    var rdate = req.body.reservationdate;
    var rtime = req.body.reservationtime;
    var rstatus = req.body.reservationstatus;

    var sqlins =
      "UPDATE Reservation SET UserID = ?, PlayerID = ?, ReservationDate = ?, ReservationTime = ?, StatusID = ? WHERE ReservationID = ?";
    var inserts = [ruser, rplayer, rdate, rtime, rstatus, rid];
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

  // Curently crashes the server, will fix later

  // router.get("/getres/", function (req, res) {
  //   var rid = req.query.reservationid;
  //   var ruser = req.query.reservationuser;
  //   var rplayer = req.query.reservationplayer;
  //   var rdate = req.query.reservationdate;
  //   var rtime = req.query.reservationtime;
  //   var rstatus = req.query.reservationstatus;

  //   if (ruser > 0) {
  //     var useraddon = " and UserID = ?";
  //     var useraddonvar = ruser;
  //   } else {
  //     var useraddon = " and UserID Like ?";
  //     var useraddonvar = "%%";
  //   }

  //   if (rplayer > 0) {
  //     var playeraddon = " and PlayerID = ?";
  //     var playeraddonvar = rplayer;
  //   } else {
  //     var playeraddon = " and PlayerID Like ?";
  //     var playeraddonvar = "%%";
  //   }

  //   if (rstatus > 0) {
  //     var statusaddon = " and StatusID = ?";
  //     var statusaddonvar = rstatus;
  //   } else {
  //     var statusaddon = " and StatusID Like ?";
  //     var statusaddonvar = "%%";
  //   }

  //   var sqlsel =
  //     "SELECT Reservation.*, Status.StatusName from Reservation " +
  //     "inner join Status on Status.StatusID = Reservation.StatusID " +
  //     "WHERE ReservationID Like ? and UserID Like ? and PlayerID Like ? and ReservationDate Like ? and ReservationTime Like ?" +
  //     useraddon +
  //     playeraddon +
  //     statusaddon;
  //   var inserts = [
  //     "%" + rid + "%",
  //     "%" + ruser + "%",
  //     "%" + rplayer + "%",
  //     "%" + rdate + "%",
  //     "%" + rtime + "%",
  //     useraddonvar,
  //     playeraddonvar,
  //     statusaddonvar,
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
  // ----------------- Inserts Reservation -----------------

  router.post("/reservation", function (req, res) {
    var ruser = req.body.resuser;
    var rplayer = req.body.resplayer;
    var rdate = req.body.resdate;
    var rtime = req.body.restime;
    var rstatus = req.body.resstatus;

    var sqlins =
      "INSERT INTO Reservation (UserID, PlayerID, ReservationDate, ReservationTime, StatusID) VALUES (?, ?, ?, ?, ?)";

    var inserts = [ruser, rplayer, rdate, rtime, rstatus];
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
