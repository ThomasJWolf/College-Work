var express = require("express");
const router = express.Router();
const mysql = require("mysql2");

module.exports = function (con, bcrypt) {
  //
  // ----------------- Gets All Categorys (update) -----------------

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
    var ckey = req.query.upcatkey;

    var sqlsel = "select * from Category where CategoryID = ?";
    var inserts = [ckey];

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
  // ----------------- Update Single Categorys (update) -----------------

  router.post("/updatesinglecat", function (req, res) {
    var cid = req.body.categoryid;
    var cname = req.body.categoryname;

    var sqlins =
      "UPDATE Category SET CategoryName = ? WHERE CategoryID = ?";
    var inserts = [cname, cid];
    var sql = mysql.format(sqlins, inserts);
    console.log(sql);
    con.execute(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record updated");

      res.end();
    });
  });

  //
  // ----------------- Searches All Categorys -----------------

  router.get("/getcat/", function (req, res) {
    var cid = req.query.upcategoryid;
    var cname = req.query.upcategoryname;

    var sqlsel =
      "SELECT Category " +
      "WHERE CategoryID Like ? and CategoryName Like ? "
    var inserts = [
      "%" + cid + "%",
      "%" + cname + "%",
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
  // ----------------- Inserts Category -----------------

  router.post("/category", function (req, res) {
    var cname = req.body.categoryname;

    var sqlins =
      "INSERT INTO Category (CategoryName) VALUES (?)";

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
