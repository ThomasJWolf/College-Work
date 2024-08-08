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
    var pkey = req.query.upprchkey;

    var sqlsel = "select * from Purchase where PurchaseID = ?";
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
  // ----------------- Update Single Purchases (update) -----------------

  router.post("/updatesingleprch", function (req, res) {
    var pid = req.body.purchaseid;
    var pammount = req.body.purchaseammount;
    var pdate = req.body.purchasedate;
    var puser = req.body.prchuser;
    var pplayer = req.body.prchplayer;

    var sqlins =
      "UPDATE Purchase SET PurchaseAmmount = ?, PurchaseDate = ?, UserID = ?, PlayerID = ? WHERE PurchaseID = ?";
    var inserts = [pammount, pdate, puser, pplayer, pid];
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

  // Curently crashes the server, will fix later

  // router.get("/getprch/", function (req, res) {
  //   var pid = req.query.uppurchaseid;
  //   var pammount = req.query.uppurchaseammount;
  //   var pdate = req.query.uppurchasedate;
  //   var puser = req.query.upprchuser;
  //   var pplayer = req.query.upprchplayer;

  //   if (puser > 0) {
  //     var useraddon = " and CategoryID = ?";
  //     var useraddonvar = puser;
  //   } else {
  //     var useraddon = " and CategoryID Like ?";
  //     var useraddonvar = "%%";
  //   }

  //   if (pplayer > 0) {
  //     var playeraddon = " and CategoryID = ?";
  //     var playeraddonvar = pplayer;
  //   } else {
  //     var playeraddon = " and CategoryID Like ?";
  //     var playeraddonvar = "%%";
  //   }

  //   var sqlsel =
  //     "SELECT Purchase.*, User.UserName, Player.PlayerName from Purchase " +
  //     "inner join User on User.UserID = Purchase.UserID " +
  //     "inner join Player on Player.PlayerID = Purchase.PlayerID " +
  //     "WHERE PurchaseID Like ? and PurchaseAmmount Like ? and PurchaseDate Like ? " +
  //     useraddon +
  //     playeraddon;

  //   var inserts = [
  //     "%" + pid + "%",
  //     "%" + pammount + "%",
  //     "%" + pdate + "%",
  //     useraddonvar,
  //     playeraddonvar,
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
  // ----------------- Inserts Purchase -----------------

  router.post("/purchase", function (req, res) {
    var pammount = req.body.purchaseammount;
    var puser = req.body.prchuser;
    var pplayer = req.body.prchplayer;

    var sqlins =
      "INSERT INTO Purchase (PurchaseAmmount, PurchaseDate = CURRENT_DATE(), UserID, PlayerID) VALUES (?, ?, ?)";
    var inserts = [pammount, puser, pplayer];

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
