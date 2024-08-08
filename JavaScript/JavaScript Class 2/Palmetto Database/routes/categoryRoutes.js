var express = require("express");
const router = express.Router();
const mysql = require("mysql2");

module.exports = function (con, bcrypt) {
  //
  // ----------------- Gets All Categories (update) -----------------

  router.get("/getcats/", function (req, res) {
    var sqlsel = "select * from Category";
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
  // ----------------- Gets Single Category (update) -----------------

  router.get("/getsinglecat/", function (req, res) {
    console.log(req.query);
    var twckey = req.query.twupcatid;

    var sqlsel = "select * from Category where CategoryID = ?";
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
  // ----------------- Update Single Categories (update) -----------------

  router.post("/updatesinglecat", function (req, res) {
    var twcid = req.body.twupcategoryid;
    var twcname = req.body.twupcategoryname;

    var sqlins = "UPDATE Category SET CategoryName = ? WHERE CategoryID = ?";
    var inserts = [twcname, twcid];
    var sql = mysql.format(sqlins, inserts);
    console.log(sql);
    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record updated");

      res.end();
    });
  });

  //
  // ----------------- Searches All Categories -----------------

  router.get("/getcat/", function (req, res) {
    console.log(req.query);
    var twcid = req.query.twcategoryid;
    var twcname = req.query.twcategoryname;

    var sqlsel =
      "SELECT * FROM Category WHERE CategoryID Like ? and CategoryName Like ? ";
    var inserts = ["%" + twcid + "%", "%" + twcname + "%"];

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
  // ----------------- Inserts Category -----------------

  router.post("/category", function (req, res) {
    var cname = req.body.twcategoryname;

    var sqlins = "INSERT INTO Category (CategoryName) VALUES (?)";

    var inserts = [cname];
    var sql = mysql.format(sqlins, inserts);

    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.redirect("insertcategory.html");
      res.end();
    });
  });

  return router;
};
