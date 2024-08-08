var express = require("express");
const router = express.Router();
const mysql = require("mysql2");

module.exports = function (con, bcrypt) {
  //
  // ----------------- Gets All Carts (update) -----------------

  router.get("/getcrts/", function (req, res) {
    var sqlsel = "select * from Cart";
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
  // ----------------- Gets Carts Roles -----------------

  router.get("/getcrtusers/", function (req, res) {
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

  router.get("/getcrtplayers/", function (req, res) {
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
  // ----------------- Gets Single Cart (update) -----------------

  router.get("/getsinglecrt/", function (req, res) {
    var twckey = req.query.uptwcrtkey;

    var sqlsel = "select * from Cart where CartID = ?";
    var inserts = [twckey];

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
  // ----------------- Update Single Carts (update) -----------------

  router.post("/updatesinglecrt", function (req, res) {
    var twcid = req.body.twcartid;
    var twcammount = req.body.twcartammount;
    var twcdate = req.body.twcartdate;
    var twcuser = req.body.twcartuser;
    var twcplayer = req.body.twcartplayer;

    var sqlins =
      "UPDATE Cart SET CartAmmount = ?, CartDate = ?, UserID = ?, PlayerID = ? WHERE CartID = ?";
    var inserts = [twcammount, twcdate, twcuser, twcplayer, twcid];
    var sql = mysql.format(sqlins, inserts);
    console.log(sql);
    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record updated");

      res.end();
    });
  });

  //
  // ----------------- Searches All Carts -----------------

  // Curently crashes the server, will fix later

  router.get("/getcrt/", function (req, res) {
    var twcid = req.query.twcartid;
    var twcdailyid = req.query.twcartdailyid;
    var twcuser = req.query.twcartuser;
    var twcplayer = req.query.twcartplayer;
    var twcpickup = req.query.twcartpickup;
    var twcmade = req.query.twcartmade;
    var twcdate = req.query.twcartdate;
    console.log(
      "ID:" +
        twcid +
        " DailyID:" +
        twcdailyid +
        " User:" +
        twcuser +
        " Player:" +
        twcplayer +
        " Pickup:" +
        twcpickup +
        " Made:" +
        twcmade +
        " Date:" +
        twcdate
    );

    if (twcpickup == 1 || twcpickup == 0) {
      var twpickupaddon = " and CartPickup = ?";
      var twpickupaddonvar = twcpickup;
    } else {
      var twpickupaddon = " and CartPickup Like ?";
      var twpickupaddonvar = "%%";
    }

    if (twcmade == 1 || twcmade == 0) {
      var twmadeaddon = " and CartMade = ?";
      var twmadeaddonvar = twcmade;
    } else {
      var twmadeaddon = " and CartMade Like ?";
      var twmadeaddonvar = "%%";
    }

    if (twcuser > 0) {
      var twuseraddon = " and Cart.UserID = ?";
      var twuseraddonvar = twcuser;
    } else {
      var twuseraddon = " and Cart.UserID Like ?";
      var twuseraddonvar = "%%";
    }

    if (twcplayer > 0) {
      var twplayeraddon = " and Cart.PlayerID = ?";
      var twplayeraddonvar = twcplayer;
    } else {
      var twplayeraddon = " and Cart.PlayerID Like ?";
      var twplayeraddonvar = "%%";
    }

    var sqlsel =
      "SELECT Cart.*, User.UserName, Player.PlayerName from Cart " +
      "inner join User on User.UserID = Cart.UserID " +
      "inner join Player on Player.PlayerID = Cart.PlayerID " +
      "WHERE CartID Like ? and CartDailyID Like ? and CartDate Like ?" +
      twpickupaddon +
      twmadeaddon +
      twuseraddon +
      twplayeraddon;

    var inserts = [
      "%" + twcid + "%",
      "%" + twcdailyid + "%",
      "%" + twcdate + "%",
      twpickupaddonvar,
      twmadeaddonvar,
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
  // ----------------- Inserts Cart -----------------

  router.post("/cart", function (req, res) {
    console.log(req.body); // Add this line to log the request body
    var twcuser = req.body.twcartuser;
    var twcplayer = req.body.twcartplayer;

    var sqlins = "INSERT INTO Cart (UserID, PlayerID) VALUES (?, ?)";
    var inserts = [twcuser, twcplayer];

    var sql = mysql.format(sqlins, inserts);

    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.redirect("insertcart.html");
      res.end();
    });
  });

  return router;
};
