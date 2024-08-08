"use strict";
var fs = require("fs");
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var bcrypt = require("bcrypt");

const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "istwebclass.org",
  user: "twolf1_Thomas",
  password: "mKVXe_UbFSvh",
  database: "twolf1_JavaScript_2",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!!");
});

app.set("port", process.env.PORT || 3000);

app.use("/", express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/login.html"));
});

app.post("/login/", function (req, res) {
  var eemail = req.body.employeeemail;
  var epw = req.body.employeepw;

  var sqlsel = "select * from employeetable where dbemployeeemail = ?";

  var inserts = [eemail];

  var sql = mysql.format(sqlsel, inserts);
  console.log("SQL: " + sql);
  con.query(sql, function (err, data) {
    if (data.length > 0) {
      console.log("User Name Correct:");
      console.log(data[0].dbemployeepassword);
      ``;
      bcrypt.compare(
        epw,
        data[0].dbemployeepassword,
        function (err, passwordCorrect) {
          if (err) {
            throw err;
          } else if (!passwordCorrect) {
            console.log("Password incorrect");
          } else {
            console.log("Password correct");
            res.send({ redirect: "/searchemployee.html" });
          }
        }
      );
    } else {
      console.log("Incorrect user or password");
    }
  });
});

app.post("/logincustomer/", function (req, res) {
  var eemail = req.body.customeremail;
  var epw = req.body.customerpw;

  var sqlsel = "select * from customertable where dbcustomeremail = ?";

  var inserts = [eemail];

  var sql = mysql.format(sqlsel, inserts);
  console.log("SQL: " + sql);
  con.query(sql, function (err, data) {
    if (data.length > 0) {
      console.log("User Name Correct:");
      console.log(data[0].dbcustomerpassword);
      ``;
      bcrypt.compare(
        epw,
        data[0].dbcustomerpassword,
        function (err, passwordCorrect) {
          if (err) {
            throw err;
          } else if (!passwordCorrect) {
            console.log("Password incorrect");
          } else {
            console.log("Password correct");
            res.send({ redirect: "/searchcustomer.html" });
          }
        }
      );
    } else {
      console.log("Incorrect user or password");
    }
  });
});

app.get("/getemptypes", function (req, res) {
  var sqlsel = "select * from employeetypes";
  var sql = mysql.format(sqlsel);

  con.query(sql, function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.send(JSON.stringify(data));
  });
});

app.get("/getemp/", function (req, res) {
  console.log(req.query);
  var eid = req.query.employeeid;
  var ename = req.query.employeename;
  var ephone = req.query.employeephone;
  var eemail = req.query.employeeemail;
  var esalary = req.query.employeesalary;
  var emailer = req.query.employeemailer;
  var etype = req.query.employeetype;
  console.log("Mailer: " + emailer);
  console.log("Type : " + etype);
  console.log(req.query.employeetype);
  let mailerCondition = "";
  let typeCondition = "";

  if (emailer == 1 || emailer == 0) {
    mailerCondition = " and dbemployeemailer = " + mysql.escape(emailer);
  } else {
    mailerCondition = ' and dbemployeemailer Like "%"';
  }

  if (etype > 0) {
    typeCondition = " and dbemployeetype = " + mysql.escape(etype);
  } else {
    typeCondition = ' and dbemployeetype Like "%"';
  }

  var sqlsel =
    "Select employeetable.*, employeetypes.dbemptypename from employeetable inner join employeetypes on employeetypes.dbemptypeid = employeetable.dbemployeetype " +
    " where dbemployeeid LIKE ? and dbemployeename LIKE ? and dbemployeephone LIKE ? and dbemployeeemail LIKE ? and dbemployeesalary LIKE ?" +
    mailerCondition +
    typeCondition;

  var inserts = [
    "%" + eid + "%",
    "%" + ename + "%",
    "%" + ephone + "%",
    "%" + eemail + "%",
    "%" + esalary + "%",
    "%" + emailer + "%",
    "%" + etype + "%",
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

app.get("/getcustrewards", function (req, res) {
  var sqlsel = "select * from customerreward";
  var sql = mysql.format(sqlsel);

  con.query(sql, function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.send(JSON.stringify(data));
  });
});

app.get("/getcust/", function (req, res) {
  console.log(req.query);
  var cid = req.query.customerid;
  var cname = req.query.customername;
  var caddress = req.query.customeraddress;
  var czip = req.query.customerzip;
  var ccredit = req.query.customercredit;
  var cemail = req.query.customeremail;
  var cdiscount = req.query.customerdiscount;
  var creward = req.query.customerreward;
  console.log("Discount: " + cdiscount);
  console.log("Reward : " + creward);
  console.log(req.query.customerreward);
  let discountCondition = "";
  let rewardCondition = "";

  if (cdiscount == 1 || cdiscount == 0) {
    discountCondition = " and dbcustomerdiscount = " + mysql.escape(cdiscount);
  } else {
    discountCondition = ' and dbcustomerdiscount Like "%"';
  }

  if (creward > 0) {
    rewardCondition = " and dbcustomerreward = " + mysql.escape(creward);
  } else {
    rewardCondition = ' and dbcustomerreward Like "%"';
  }

  var sqlsel =
    "Select customertable.*, customerreward.dbcustrewardname from customertable inner join customerreward on customerreward.dbcustrewardid = customertable.dbcustomerreward " +
    " where dbcustomerid LIKE ? and dbcustomername LIKE ? and dbcustomeraddress LIKE ? and dbcustomerzip LIKE ? and dbcustomercredit LIKE ? and dbcustomeremail LIKE ?" +
    discountCondition +
    rewardCondition;

  var inserts = [
    "%" + cid + "%",
    "%" + cname + "%",
    "%" + caddress + "%",
    "%" + czip + "%",
    "%" + ccredit + "%",
    "%" + cemail + "%",
    "%" + cdiscount + "%",
    "%" + creward + "%",
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

app.post("/customer", function (req, res) {
  var cname = req.body.customername;
  var caddress = req.body.customeraddress;
  var czip = req.body.customerzip;
  var ccredit = req.body.customercredit;
  var cemail = req.body.customeremail;
  var cpw = req.body.customerpw;
  var cdiscount = req.body.customerdiscount;
  var creward = req.body.customerreward;
  console.log("pw" + cpw);

  var saltRounds = 10;
  var theHashedPW = "";


  bcrypt.hash(cpw, saltRounds, function (err, hashedPassword) {
    if (err) {
      console.log("BAD");
      return;
    } else {
      theHashedPW = hashedPassword;
      console.log("Password 1: " + theHashedPW);

      var sqlins =
        "INSERT INTO customertable (dbcustomername, dbcustomeraddress, dbcustomerzip," +
        " dbcustomercredit, dbcustomeremail, dbcustomerdiscount, dbcustomerreward, dbcustomerpassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

      var inserts = [
        cname,
        caddress,
        czip,
        ccredit,
        cemail,
        cdiscount,
        creward,
        theHashedPW,
      ];

      var sql = mysql.format(sqlins, inserts);

      con.execute(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.redirect("insertcustomer.html");
        res.end();
      });
    }
  });
});

app.post("/employee", function (req, res) {
  var eid = req.body.employeeid;
  var ename = req.body.employeename;
  var ephone = req.body.employeephone;
  var eemail = req.body.employeeemail;
  var epw = req.body.employeepw;
  var esalary = req.body.employeesalary;
  var emailer = req.body.employeemailer;
  var etype = req.body.employeetype;
  console.log("pw" + epw);

  var saltRounds = 10;
  var theHashedPW = "";

  bcrypt.hash(epw, saltRounds, function (err, hashedPassword) {
    if (err) {
      console.log("BAD");
      return;
    } else {
      theHashedPW = hashedPassword;
      console.log("Password 1: " + theHashedPW);

      var sqlins =
        "INSERT INTO employeetable (dbemployeeid, dbemployeename, dbemployeeemail," +
        " dbemployeephone, dbemployeesalary, dbemployeemailer, dbemployeetype, dbemployeepassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      var inserts = [
        eid,
        ename,
        eemail,
        ephone,
        esalary,
        emailer,
        etype,
        theHashedPW,
      ];
      var sql = mysql.format(sqlins, inserts);

      con.execute(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.redirect("insertemployee.html");
        res.end();
      });
    }
  });
});

app.listen(app.get("port"), function () {
  console.log("Server started: http://localhost:" + app.get("port") + "/");
});
