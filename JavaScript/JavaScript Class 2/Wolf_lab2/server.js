'use strict';
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "istwebclass.org",
    user: "twolf1_Thomas",
    password: "mKVXe_UbFSvh",
    database: "twolf1_JavaScript_2"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/insertemployee.html'));
});

app.post('/customer', function (req, res,) {
    var cname = req.body.customername;
    var caddress = req.body.customeraddress;
    var czip = req.body.customerzip;
    var ccredit = req.body.customercredit;
    var cemail = req.body.customeremail;
    console.log(cname);

    var sqlins = "INSERT INTO customertable (dbcustomername, dbcustomeraddress, dbcustomerzip, dbcustomercredit, dbcustomeremail) VALUES (?, ?, ?, ?, ?)";

    var inserts = [cname, caddress, czip, ccredit, cemail];

    var sql = mysql.format(sqlins, inserts);

    con.execute(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.redirect('insertcustomer.html');
        res.end()
    });
});

app.post('/employee', function (req, res,) {
    var ename = req.body.employeename;
    var eid = req.body.employeeid;
    var ephone = req.body.employeephone;
    var esalary = req.body.employeesalary;
    var eemail = req.body.employeeemail;
    console.log(ename);

    var sqlins = "INSERT INTO employeetable (dbemployeename, dbemployeeid, dbemployeephone, dbemployeesalary, dbemployeeemail) VALUES (?, ?, ?, ?, ?)";

    var inserts = [ename, eid, ephone, esalary, eemail];

    var sql = mysql.format(sqlins, inserts);

    con.execute(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.redirect('insertemployee.html');
        res.end()
    });
});

app.listen(app.get('port'), function () {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

app.get('/getemp/', function (req, res) {
    var eid = req.query.employeeid;
    var ename = req.query.employeename;
    var ephone = req.query.employeephone;
    var eemail = req.query.employeeemail;
    var esalary = req.query.employeesalary;

    var sqlsel = 'Select * from employeetable where dbemployeeid Like ? and dbemployeename Like ? and dbemployeephone Like ? and dbemployeesalary Like ?';

    var inserts = ['%' + eid + '%', '%' + ename + '%', '%' + ephone + '%', '%' + eemail + '%', '%' + esalary + '%',]

    var sql = mysql.format(sqlsel, inserts);

    console.log(sql)

    con.query(sql, function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.send(JSON.stringify(data));
    })

});

app.get('/getcus/', function (req, res) {
    var caddress = req.query.customeraddress;
    var cname = req.query.customername;
    var czip = req.query.customerzip;
    var cemail = req.query.customeremail;
    var ccredit = req.query.customercredit;

    var sqlsel = 'Select * from customertable where dbcustomeraddress Like ? and dbcustomername Like ? and dbcustomerzip Like ? and dbcustomercredit Like ?';

    var inserts = ['%' + caddress + '%', '%' + cname + '%', '%' + czip + '%', '%' + cemail + '%', '%' + ccredit + '%',]

    var sql = mysql.format(sqlsel, inserts);

    console.log(sql)

    con.query(sql, function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.send(JSON.stringify(data));
    })

});
