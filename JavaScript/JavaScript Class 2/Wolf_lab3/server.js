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
    console.log("Connected!!");
});

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/public/insertemployee.html"));
});

app.get('/getemptypes', function (req, res) {
    var sqlsel = 'select * from employeetypes'
    var sql = mysql.format(sqlsel)

    con.query(sql, function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.send(JSON.stringify(data));
    })

});

app.get('/getemp/', function (req, res) {
    console.log(req.query);
    var eid = req.query.employeeid;
    var ename = req.query.employeename;
    var ephone = req.query.employeephone;
    var eemail = req.query.employeeemail;
    var esalary = req.query.employeesalary;
    var emailer = req.query.employeemailer;
    var etype = req.query.employeetype;
    console.log( "Mailer: "+ emailer);
    console.log( "Type : " + etype);
    console.log(req.query.employeetype);
    let mailerCondition = '';
    let typeCondition = '';
    
    if (emailer == 1 || emailer == 0) {
        mailerCondition = ' and dbemployeemailer = ' + mysql.escape(emailer);
    } else {
        mailerCondition = ' and dbemployeemailer Like "%"';
    }
    
    if (etype > 0) {
        typeCondition = ' and dbemployeetype = ' + mysql.escape(etype);
    } else {
        typeCondition = ' and dbemployeetype Like "%"';
    }
    
    var sqlsel = 'Select employeetable.*, employeetypes.dbemptypename from employeetable inner join employeetypes on employeetypes.dbemptypeid = employeetable.dbemployeetype ' +
        ' where dbemployeeid LIKE ? and dbemployeename LIKE ? and dbemployeephone LIKE ? and dbemployeeemail LIKE ? and dbemployeesalary LIKE ?' + mailerCondition + typeCondition;
    
    var inserts = ['%' + eid + '%', '%' + ename + '%', '%' + ephone + '%', '%' + eemail + '%', '%' + esalary + '%',  '%' + emailer + '%', '%' + etype + '%'];
    
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

app.post('/customer', function (req, res) {
    var cname = req.body.customername;
    var caddress = req.body.customeraddress;
    var czip = req.body.customerzip;
    var ccredit = req.body.customercredit;
    var cemail = req.body.customeremail;
    console.log(cname + "-" + caddress + "-" + czip);

    var sqlins = "INSERT INTO customertable (dbcustomername, dbcustomeraddress, dbcustomerzip,"
        + " dbcustomercredit, dbcustomeremail) VALUES (?, ?, ?, ?, ?)";

    var inserts = [cname, caddress, czip, ccredit, cemail];

    var sql = mysql.format(sqlins, inserts);

    con.execute(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.redirect('insertcustomer.html');
        res.end();
    });

});

app.post('/employee', function (req, res,) {

    var eid = req.body.employeeid;
    var ename = req.body.employeename;
    var ephone = req.body.employeephone;
    var eemail = req.body.employeeemail;
    var esalary = req.body.employeesalary;
    console.log(ename);


    var sql = "INSERT INTO employeetable (dbemployeeid, dbemployeename, dbemployeeemail, dbemployeephone, dbemployeesalary) VALUES ('" +
        eid + "', '" + ename + "', '" + ephone + "', '" + eemail + "', " + esalary + ")";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.redirect('insertemployee.html');
        res.end();
    });
});

app.listen(app.get('port'), function () {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
