var express = require("express");
const router = express.Router();
const mysql = require("mysql2");

module.exports = function (con, bcrypt) {
  //
  // ----------------- Gets All Inventorys (update) -----------------

  router.get("/getinvts/", function (req, res) {
    var sqlsel = "select * from Inventory";
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
  // ----------------- Gets Inventorys Roles -----------------

  router.get("/getinvtproducts/", function (req, res) {
    var sqlsel = "SELECT * from Product";
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
  // ----------------- Gets Single Inventory (update) -----------------

  router.get("/getsingleinvt/", function (req, res) {
    var twikey = req.query.twupinvtkey;

    var sqlsel = "select * from Inventory where InventoryID = ?";
    var inserts = [twikey];

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
  // ----------------- Update Single Inventorys (update) -----------------

  router.post("/updatesingleinvt", function (req, res) {
    var twiid = req.body.twinventoryid;
    var twiproduct = req.body.twinventoryproduct;
    var twiinstock = req.body.twinventoryinstock;

    var sqlins =
      "UPDATE Inventory SET InventoryInStock = ?, InventoryLastUpdated = CURRENT_DATE() , ProductID = ? WHERE InventoryID = ?";
    var inserts = [twiinstock, twiproduct, twiid];
    var sql = mysql.format(sqlins, inserts);
    console.log(sql);
    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record updated");

      res.end();
    });
  });

  //
  // ----------------- Searches All Inventorys -----------------

  // Curently crashes the server, will fix later

  router.get("/getinvt/", function (req, res) {
    var twiid = req.query.twinventoryid;
    var twiproduct = req.query.twinventoryproduct;
    var twiinstock = req.query.twinventoryinstock;
    var twilastupdated = req.query.twinventorylastupdated;

    if (twiproduct > 0) {
      var twproductaddon = " and Inventory.ProductID = ?";
      var twproductaddonvar = twiproduct;
    } else {
      var twproductaddon = " and Inventory.ProductID Like ?";
      var twproductaddonvar = "%%";
    }

    var sqlsel =
      "SELECT Inventory.*, Product.ProductName from Inventory " +
      "inner join Product on Product.ProductID = Inventory.ProductID " +
      "WHERE InventoryID Like ? and InventoryInStock Like ? and InventoryLastUpdated Like ? " +
      twproductaddon;
    var inserts = [
      "%" + twiid + "%",
      "%" + twiinstock + "%",
      "%" + twilastupdated + "%",
      twproductaddonvar,
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
  // ----------------- Inserts Inventory -----------------

  router.post("/inventory", function (req, res) {
    var twiproduct = req.body.twinventoryproduct;
    var twiinstock = req.body.twinventoryinstock;

    var sqlins =
      "INSERT INTO Inventory (InventoryInStock, ProductID, InventoryLastUpdated) VALUES (?, ?, CURRENT_TIMESTAMP())";

    var inserts = [twiinstock, twiproduct];
    var sql = mysql.format(sqlins, inserts);

    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.redirect("insertinventory.html");
      res.end();
    });
  });

  return router;
};
