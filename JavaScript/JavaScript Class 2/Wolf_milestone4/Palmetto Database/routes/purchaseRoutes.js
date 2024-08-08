var express = require("express");
const router = express.Router();
const mysql = require("mysql2");

module.exports = function (con, bcrypt) {
  //
  // ----------------- Gets All Purchases (update) -----------------

  router.get("/getprchs/", function (req, res) {
    var sqlsel = "select * from Purchase";
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
  // ----------------- Gets Purchases Roles -----------------

  router.get("/getprchusers/", function (req, res) {
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

  router.get("/getprchplayers/", function (req, res) {
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
  // ----------------- Gets Single Purchase (update) -----------------

  router.get("/getsingleprch/", function (req, res) {
    var twpkey = req.query.uptwprchkey;

    var sqlsel = "select * from Purchase where PurchaseID = ?";
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
  // ----------------- Update Single Purchases (update) -----------------

  router.post("/updatesingleprch", function (req, res) {
    var twpid = req.body.twpurchaseid;
    var twpammount = req.body.twpurchaseammount;
    var twpdate = req.body.twpurchasedate;
    var twpuser = req.body.twprchuser;
    var twpplayer = req.body.twprchplayer;

    var sqlins =
      "UPDATE Purchase SET PurchaseAmmount = ?, PurchaseDate = ?, UserID = ?, PlayerID = ? WHERE PurchaseID = ?";
    var inserts = [twpammount, twpdate, twpuser, twpplayer, twpid];
    var sql = mysql.format(sqlins, inserts);
    console.log(sql);
    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record updated");

      res.end();
    });
  });

  //
  // ----------------- Searches All Purchases -----------------

  router.get("/getprch/", function (req, res) {
    var twpid = req.query.twpurchaseid;
    var twpammount = req.query.twpurchaseammount;
    var twpdate = req.query.twpurchasedate;
    var twpuser = req.query.twpurchaseuser;
    var twpplayer = req.query.twpurchaseplayer;

    if (twpuser > 0) {
      var twuseraddon = " and Purchase.UserID = ?";
      var twuseraddonvar = twpuser;
    } else {
      var twuseraddon = " and Purchase.UserID Like ?";
      var twuseraddonvar = "%%";
    }

    if (twpplayer > 0) {
      var twplayeraddon = " and Purchase.PlayerID = ?";
      var twplayeraddonvar = twpplayer;
    } else {
      var twplayeraddon = " and Purchase.PlayerID Like ?";
      var twplayeraddonvar = "%%";
    }

    var sqlsel =
      "SELECT Purchase.*, User.UserName, Player.PlayerName from Purchase " +
      "inner join User on User.UserID = Purchase.UserID " +
      "inner join Player on Player.PlayerID = Purchase.PlayerID " +
      "WHERE PurchaseID Like ? and PurchaseAmmount Like ? and PurchaseDate Like ? " +
      twuseraddon +
      twplayeraddon;

    var inserts = [
      "%" + twpid + "%",
      "%" + twpammount + "%",
      "%" + twpdate + "%",
      twuseraddonvar,
      twplayeraddonvar,
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
  // ----------------- Inserts Purchase -----------------

  router.post("/purchase", function (req, res) {
    console.log(req.body); // Add this line to log the request body
    var twpammount = req.body.twpurchaseammount;
    var twpuser = req.body.twpurchaseuser;
    var twpplayer = req.body.twpurchaseplayer;

    var sqlins =
      "INSERT INTO Purchase (PurchaseAmmount, PurchaseDate, UserID, PlayerID) VALUES (?, CURRENT_TIMESTAMP(), ?, ?)";
    var inserts = [twpammount, twpuser, twpplayer];

    var sql = mysql.format(sqlins, inserts);

    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.redirect("insertpurchase.html");
      res.end();
    });
  });

  return router;
};
