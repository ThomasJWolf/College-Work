var express = require("express");
const router = express.Router();
const mysql = require("mysql2");

module.exports = function (con, bcrypt) {
  //
  // ----------------- Gets All Purchase Details (update) -----------------

  router.get("/getprchdtls/", function (req, res) {
    var sqlsel = "select * from PurchaseDetail";
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
  // ----------------- Gets Purchase Details Roles -----------------

  router.get("/getprchdtlproducts/", function (req, res) {
    var sqlsel = "SELECT ProductID, ProductName from Product";
    var sql = mysql.format(sqlsel);

    con.query(sql, function (err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      res.send(JSON.stringify(data));
    });
  });

  router.get("/getprchdtlpurchases/", function (req, res) {
    var sqlsel = "SELECT PurchaseID from Purchase";
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
  // ----------------- Gets Single PurchaseDetailetail (update) -----------------

  router.get("/getsingleprchdtl/", function (req, res) {
    var twpkey = req.query.twupprchdtlkey;

    var sqlsel = "select * from PurchaseDetail where PurchaseDetailID = ?";
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
  // ----------------- Update Single Purchase Details (update) -----------------

  router.post("/updatesingleprchdtl", function (req, res) {
    var twpid = req.body.twpurchasedetailid;
    var twpammount = req.body.twpurchasedetailammount;
    var twpdate = req.body.twpurchasedetaildate;
    var twpproduct = req.body.twpurchasedetailproduct;
    var twppurchase = req.body.twpurchasedetailpurchase;

    var sqlins =
      "UPDATE PurchaseDetail SET PurchaseDetailAmmount = ?, PurchaseDetailDate = ?, ProductID = ?, PurchaseID = ? WHERE PurchaseDetailID = ?";
    var inserts = [twpammount, twpdate, twpproduct, twppurchase, twpid];
    var sql = mysql.format(sqlins, inserts);
    console.log(sql);
    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record updated");

      res.end();
    });
  });

  //
  // ----------------- Searches All Purchase Details -----------------

  // Curently crashes the server, will fix later

  router.get("/getprchdtl/", function (req, res) {
    var twpid = req.query.twpurchasedetailid;
    var twpquantity = req.query.twpurchasedetailquantity;
    var twpproduct = req.query.twpurchasedetailproduct;
    var twppurchase = req.query.twpurchasedetailpurchase;

    if (twpproduct > 0) {
      var twproductaddon = " and PurchaseDetail.ProductID = ?";
      var twproductaddonvar = twpproduct;
    } else {
      var twproductaddon = " and PurchaseDetail.ProductID Like ?";
      var twproductaddonvar = "%%";
    }

    if (twppurchase > 0) {
      var twpurchaseaddon = " and PurchaseDetail.PurchaseID = ?";
      var twpurchaseaddonvar = twppurchase;
    } else {
      var twpurchaseaddon = " and PurchaseDetail.PurchaseID Like ?";
      var twpurchaseaddonvar = "%%";
    }


    var sqlsel =
          "SELECT PurchaseDetail.*, Product.ProductName, Purchase.PurchaseID from PurchaseDetail " +
      "inner join Product on Product.ProductID = PurchaseDetail.ProductID " +
      "inner join Purchase on Purchase.PurchaseID = PurchaseDetail.PurchaseID " +
      "WHERE PurchaseDetail.PurchaseDetailID Like ? and PurchaseDetail.PurchaseQuantity Like ?" +
      twproductaddon +
      twpurchaseaddon;

    var inserts = [
      "%" + twpid + "%",
      "%" + twpquantity + "%",
      twproductaddonvar,
      twpurchaseaddonvar,
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
  // ----------------- Inserts PurchaseDetail -----------------

  router.post("/purchasedetail", function (req, res) {
    var twpquantity = req.body.twpurchasedetailquantity;
    var twpproduct = req.body.twpurchasedetailproduct;
    var twppurchase = req.body.twpurchasedetailpurchase;

    var sqlins =
      "INSERT INTO PurchaseDetail (PurchaseID, ProductID, PurchaseQuantity) VALUES (?, ?, ?)";
    var inserts = [twppurchase, twpproduct, twpquantity];

    var sql = mysql.format(sqlins, inserts);

    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.redirect("insertpurchasedetail.html");
      res.end();
    });
  });

  return router;
};
