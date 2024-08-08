var express = require("express");
const router = express.Router();
const mysql = require("mysql2");

module.exports = function (con, bcrypt) {
  //
  // ----------------- Gets All Products (update) -----------------

  router.get("/getprods/", function (req, res) {
    var sqlsel = "select * from Product";
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
  // ----------------- Gets Products Roles -----------------

  router.get("/getprodcategorys/", function (req, res) {
    var sqlsel = "SELECT * from Category";
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
  // ----------------- Gets Single Product (update) -----------------

  router.get("/getsingleprod/", function (req, res) {
    var pkey = req.query.upprodkey;

    var sqlsel = "select * from Product where ProductID = ?";
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
  // ----------------- Update Single Products (update) -----------------

  router.post("/updatesingleprod", function (req, res) {
    var pid = req.body.productid;
    var pname = req.body.productname;
    var pprice = req.body.productprice;
    var pcategory = req.body.productcategory;

    var sqlins =
      "UPDATE Product SET ProductName = ?, ProductPrice = ?, CategoryID = ? WHERE ProductID = ?";
    var inserts = [pname, pprice, pcategory, pid];
    var sql = mysql.format(sqlins, inserts);
    console.log(sql);
    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record updated");

      res.end();
    });
  });

  //
  // ----------------- Searches All Products -----------------

  // Curently crashes the server, will fix later

  // router.get("/getprod/", function (req, res) {
  //   var pid = req.query.upproductid;
  //   var pname = req.query.upproductname;
  //   var pprice = req.query.upproductprice;
  //   var pcategory = req.query.upproductcategory;

  //   if (pcategory > 0) {
  //     var categoryaddon = " and CategoryID = ?";
  //     var categoryaddonvar = pcategory;
  //   } else {
  //     var categoryaddon = " and CategoryID Like ?";
  //     var categoryaddonvar = "%%";
  //   }

  //   var sqlsel =
  //     "SELECT Product.*, Category.CategoryName from Product " +
  //     "inner join Category on Category.CategoryID = Product.CatagoryID " +
  //     "WHERE ProductID Like ? and ProductName Like ? and ProductPrice Like ? " +
  //     categoryaddon;
  //   var inserts = [
  //     "%" + pid + "%",
  //     "%" + pname + "%",
  //     "%" + pprice + "%",
  //     categoryaddonvar,
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
  // ----------------- Inserts Product -----------------

  router.post("/product", function (req, res) {
    var pname = req.body.productname;
    var pprice = req.body.productprice;
    var pcategory = req.body.productcategory;

    var sqlins =
      "INSERT INTO Product (ProductName, ProductPrice, CategoryID) VALUES (?, ?, ?)";

    var inserts = [pname, pprice, pcategory];
    var sql = mysql.format(sqlins, inserts);

    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.redirect("insertproduct.html");
      res.end();
    });
  });

  return router;
};
