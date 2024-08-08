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
    var ikey = req.query.upinvtkey;

    var sqlsel = "select * from Inventory where InventoryID = ?";
    var inserts = [ikey];

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
    var iid = req.body.inventoryid;
    var iproduct = req.body.inventoryproduct;
    var iinstock = req.body.inventoryinstock;

    var sqlins =
      "UPDATE Inventory SET InventoryInStock = ?, InventoryLastUpdated = CURRENT_DATE() , ProductID = ? WHERE InventoryID = ?";
    var inserts = [iinstock, iproduct, iid];
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

  // router.get("/getinvt/", function (req, res) {
  //   var iid = req.query.invtid;
  //   var iproduct = req.query.invtproduct;
  //   var iinstock = req.query.invtinstock;
  //   var ilastupdated = req.query.invtlastupdated;

  //   if (iproduct > 0) {
  //     var productaddon = " and ProductID = ?";
  //     var productaddonvar = iproduct;
  //   } else {
  //     var productaddon = " and ProductID Like ?";
  //     var productaddonvar = "%%";
  //   }

  //   var sqlsel =
  //     "SELECT Inventory.*, Product.ProductName from Inventory " +
  //     "inner join Product on Product.ProductID = Inventory.CatagoryID " +
  //     "WHERE InventoryID Like ? and InventoryInStock Like ? and InventoryLastUpdated Like ? " +
  //     productaddon;
  //   var inserts = [
  //     "%" + iid + "%",
  //     "%" + iinstock + "%",
  //     "%" + ilastupdated + "%",
  //     productaddonvar,
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
  // ----------------- Inserts Inventory -----------------

  router.post("/inventory", function (req, res) {
    var iproduct = req.body.inventoryproduct;
    var iinstock = req.body.inventoryinstock;

    var sqlins =
      "INSERT INTO Inventory (InventoryInStock, ProductID, InventoryLastUpdated = CURRENT_DATE()) VALUES (?, ?)";

    var inserts = [iinstock, iproduct];
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
