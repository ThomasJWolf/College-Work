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
  password: "ZYsYH#_Rv6ha",
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

// Set default page to login
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/logincust.html"));
});

//
//
//
// -------------------------------------- Employee --------------------------------------
//
//

//
// ---------- Employee Login ----------

app.post("/loginemp/", function (req, res) {
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
            res.send({ redirect: "/backend/searchemployee.html" });
          }
        }
      );
    } else {
      console.log("Incorrect user or password");
    }
  });
});

//
// ---------- Insert Employees (insert) ----------

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

//
// ---------- Get Employees (search) ----------

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

//
// ---------- Get All Employee (search) ----------

app.get("/getemps", function (req, res) {
  var sqlsel = "select * from employeetable";
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
// ---------- Get Employee Types (dropdown) ----------

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

//
// ---------- Get Single Employee (update) ----------

app.get("/getsingleemp", function (req, res) {
  var ekey = req.query.upempkey;

  var sqlsel = "select * from employeetable where dbemployeekey = ?";
  var inserts = [ekey];

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
// ---------- Update Single Employee (update) ----------

app.post("/updatesingleemp/", function (req, res) {
  console.log(req.query);
  var eid = req.body.upemployeeid;
  var ename = req.body.upemployeename;
  var ephone = req.body.upemployeephone;
  var eemail = req.body.upemployeeemail;
  var esalary = req.body.upemployeesalary;
  var emailer = req.body.upemployeemailer;
  var etype = req.body.upemployeetype;
  var ekey = req.body.upemployeekey;

  var sqlsel =
    "Update employeetable SET " +
    " dbemployeeid = ?, dbemployeename = ?, dbemployeephone = ?, dbemployeeemail = ?, dbemployeesalary = ?, dbemployeemailer = ?, dbemployeetype = ? WHERE dbemployeekey = ?";

  var inserts = [eid, ename, ephone, eemail, esalary, emailer, etype, ekey];

  var sql = mysql.format(sqlsel, inserts);

  console.log(sql);

  con.execute(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record updated");
    res.end();
  });
});

//
//
//
// -------------------------------------- Customer --------------------------------------
//
//

//
// ---------- Customer Login ----------

app.post("/logincust/", function (req, res) {
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

//
// ---------- Insert Customer (insert) ----------

app.post("/customer", function (req, res) {
  var cname = req.body.customername;
  var caddress = req.body.customeraddress;
  var czip = req.body.customerzip;
  var ccredit = req.body.customercredit;
  var cemail = req.body.customeremail;
  var cpw = req.body.customerpw;
  var cdiscount = req.body.customerdiscount;
  var creward = req.body.customerreward;

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

//
// ---------- Get Employees (search) ----------

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

//
// ---------- Get Customer Reward (dropdown) ----------

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

//
// ---------- Get Single Customer (update) ----------

app.get("/getsinglecust", function (req, res) {
  var cid = req.query.upcustid;

  var sqlsel = "select * from customertable where dbcustomerid = ?";
  var inserts = [cid];

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
// ---------- Update Single Customer (update) ----------

app.post("/updatesinglecust/", function (req, res) {
  console.log(req.query);
  var cname = req.body.upcustomername;
  var caddress = req.body.upcustomeraddress;
  var czip = req.body.upcustomerzip;
  var ccredit = req.body.upcustomercredit;
  var cemail = req.body.upcustomeremail;
  var cdiscount = req.body.upcustomerdiscount;
  var creward = req.body.upcustomerreward;
  var cid = req.body.upcustomerid;
  console.log(req.query.upcustomerid);

  var sqlsel =
    "Update customertable SET dbcustomername = ?, dbcustomeraddress = ?, dbcustomerzip = ?," +
    " dbcustomercredit = ?, dbcustomeremail = ?, dbcustomerdiscount = ?, dbcustomerreward = ? WHERE dbcustomerid = ?";

  var inserts = [
    cname,
    caddress,
    czip,
    ccredit,
    cemail,
    cdiscount,
    creward,
    cid,
  ];

  var sql = mysql.format(sqlsel, inserts);

  console.log(sql);

  con.execute(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record updated");
    res.end();
  });
});

//
//
//
// -------------------------------------- Cart --------------------------------------
//
//

app.get("/Cart", function (req, res) {
  var cartemp = req.body.CartEmp;

  var sqlsel =
    "select MAX(dbcartdailyid) as daymax from cartinfo WHERE DATE(dbcartdate) = CURDATE()";

  var sql = mysql.format(sqlsel);

  var dailynumber = 1;

  con.query(sql, function (err, data) {
    console.log(data[0].daymax);

    if (!data[0].daymax) {
      dailynumber = 1;
    } else {
      dailynumber = data[0].daymax + 1;

      var sqlinscart =
        "INSERT INTO cartinfo (dbcartemp, dbcartdailyid, dbcartpickup," +
        " dbcartmade, dbcartdate) VALUES (?, ?, ?, ?, now())";

      var insertscart = [cartemp, dailynumber, 0, 0];

      var sqlcart = mysql.format(sqlinscart, insertscart);

      con.execute(sqlcart, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.redirect("insertcart.html");
        res.end();
      });
    }
  });
});

app.get("/getcart", function (req, res) {
  var empid = req.query.employeeid;

  var sqlsel =
    "select cartinfo.*, employeetable.dbemployeename from cartinfo inner join employeetable on employeetable.dbemployeekey = cartinfo.dbcartemp where dbcartemp = ? ";
  var inserts = [empid];

  var sql = mysql.format(sqlsel, inserts);

  con.query(sql, function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.send(JSON.stringify(data));
  });
});

app.listen(app.get("port"), function () {
  console.log("Server started: http://localhost:" + app.get("port") + "/");
});
