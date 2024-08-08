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
    var twpkey = req.query.twupprodkey;

    var sqlsel = "select * from Product where ProductID = ?";
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
  // ----------------- Update Single Products (update) -----------------

  router.post("/updatesingleprod", function (req, res) {
    var twpid = req.body.twproductid;
    var twpname = req.body.twproductname;
    var twpprice = req.body.twproductprice;
    var twpcategory = req.body.twproductcategory;

    var sqlins =
      "UPDATE Product SET ProductName = ?, ProductPrice = ?, CategoryID = ? WHERE ProductID = ?";
    var inserts = [twpname, twpprice, twpcategory, twpid];
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

  router.get("/getprod/", function (req, res) {
    console.log(req.query);
    var twpid = req.query.twproductid;
    var twpname = req.query.twproductname;
    var twpprice = req.query.twproductprice;
    var twpcategory = req.query.twproductcategory;

    if (twpcategory > 0) {
      var twcategoryaddon = " and Product.CategoryID = ?";
      var twcategoryaddonvar = twpcategory;
    } else {
      var twcategoryaddon = " and Product.CategoryID Like ?";
      var twcategoryaddonvar = "%%";
    }

    var sqlsel =
      "SELECT Product.*, Category.CategoryName from Product " +
      "inner join Category on Category.CategoryID = Product.CategoryID " + // Make sure to correct the spelling of 'CategoryID' here if it was a typo ('CatagoryID' in your original code)
      "WHERE ProductID Like ? and ProductName Like ? and ProductPrice Like ? " +
      twcategoryaddon;
    var inserts = [
      "%" + twpid + "%",
      "%" + twpname + "%",
      "%" + twpprice + "%",
      twcategoryaddonvar,
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
  // ----------------- Inserts Product -----------------

  router.post("/product", function (req, res) {
    var twpname = req.body.twproductname;
    var twpprice = req.body.twproductprice;
    var twpcategory = req.body.twproductcategory;

    var sqlins =
      "INSERT INTO Product (ProductName, ProductPrice, CategoryID) VALUES (?, ?, ?)";

    var inserts = [twpname, twpprice, twpcategory];
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
