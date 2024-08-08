var express = require("express");
const router = express.Router();
const mysql = require("mysql2");

module.exports = function (con, bcrypt) {
  //
  // ----------------- Gets All PurchaseDetails (update) -----------------

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
  // ----------------- Gets PurchaseDetails Roles -----------------

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
    var pkey = req.query.upprchdtlkey;

    var sqlsel = "select * from PurchaseDetail where PurchaseDetailID = ?";
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
  // ----------------- Update Single PurchaseDetails (update) -----------------

  router.post("/updatesingleprchdtl", function (req, res) {
    var pid = req.body.purchasedetailid;
    var pammount = req.body.purchasedetailammount;
    var pdate = req.body.purchasedetaildate;
    var pproduct = req.body.prchdtlproduct;
    var ppurchase = req.body.prchdtlpurchase;

    var sqlins =
      "UPDATE PurchaseDetail SET PurchaseDetailAmmount = ?, PurchaseDetailDate = ?, ProductID = ?, PurchaseID = ? WHERE PurchaseDetailID = ?";
    var inserts = [pammount, pdate, pproduct, ppurchase, pid];
    var sql = mysql.format(sqlins, inserts);
    console.log(sql);
    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record updated");

      res.end();
    });
  });

  //
  // ----------------- Searches All PurchaseDetails -----------------

  // Curently crashes the server, will fix later

  // router.get("/getprchdtl/", function (req, res) {
  //   var pid = req.query.uppurchasedetailid;
  //   var pammount = req.query.uppurchasedetailammount;
  //   var pdate = req.query.uppurchasedetaildate;
  //   var pproduct = req.query.upprchdtlproduct;
  //   var ppurchase = req.query.upprchdtlpurchase;

  //   if (pproduct > 0) {
  //     var productaddon = " and CategoryID = ?";
  //     var productaddonvar = pproduct;
  //   } else {
  //     var productaddon = " and CategoryID Like ?";
  //     var productaddonvar = "%%";
  //   }

  //   if (ppurchase > 0) {
  //     var purchaseaddon = " and CategoryID = ?";
  //     var purchaseaddonvar = ppurchase;
  //   } else {
  //     var purchaseaddon = " and CategoryID Like ?";
  //     var purchaseaddonvar = "%%";
  //   }

  //   var sqlsel =
  //     "SELECT PurchaseDetail.*, Product.ProductName, Purchase.PurchaseName from PurchaseDetail " +
  //     "inner join Product on Product.ProductID = PurchaseDetail.ProductID " +
  //     "inner join Purchase on Purchase.PurchaseID = PurchaseDetail.PurchaseID " +
  //     "WHERE PurchaseDetailID Like ? and PurchaseDetailAmmount Like ? and PurchaseDetailDate Like ? " +
  //     productaddon +
  //     purchaseaddon;

  //   var inserts = [
  //     "%" + pid + "%",
  //     "%" + pammount + "%",
  //     "%" + pdate + "%",
  //     productaddonvar,
  //     purchaseaddonvar,
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
  // ----------------- Inserts PurchaseDetail -----------------

  router.post("/purchasedetail", function (req, res) {
    var pammount = req.body.purchasedetailammount;
    var pproduct = req.body.prchdtlproduct;
    var ppurchase = req.body.prchdtlpurchase;

    var sqlins =
      "INSERT INTO PurchaseDetail (PurchaseDetailAmmount, PurchaseDetailDate = CURRENT_DATE(), ProductID, PurchaseID) VALUES (?, ?, ?)";
    var inserts = [pammount, pproduct, ppurchase];

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
