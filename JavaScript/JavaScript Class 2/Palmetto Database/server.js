"use strict";
var fs = require("fs");
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");


const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "istwebclass.org",
  user: "twolf1_Thomas",
  password: "ZYsYH#_Rv6ha",
  database: "twolf1_TCTG_Golf_Academy",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!!");
});

app.set("port", process.env.PORT || 3000);

app.use("/", express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/backend", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/backend/login.html"));
});

// Require route modules
const userRoutes = require("./routes/userRoutes")(con, bcrypt);
const playerRoutes = require("./routes/playerRoutes")(con, bcrypt);
const productRoutes = require("./routes/productRoutes")(con, bcrypt);
const categoryRoutes = require("./routes/categoryRoutes")(con, bcrypt);
const inventoryRoutes = require("./routes/inventoryRoutes")(con, bcrypt);
const purchaseRoutes = require("./routes/purchaseRoutes")(con, bcrypt);
const purchasedetailRoutes = require("./routes/purchasedetailRoutes")(
  con,
  bcrypt
);
const reservationRoutes = require("./routes/reservationRoutes")(con, bcrypt);
const cartRoutes = require("./routes/cartRoutes")(con, bcrypt);

// Use routes
app.use("/users", userRoutes);
app.use("/players", playerRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/inventorys", inventoryRoutes);
app.use("/purchases", purchaseRoutes);
app.use("/purchasedetails", purchasedetailRoutes);
app.use("/reservations", reservationRoutes);
app.use("/carts", cartRoutes);

app.listen(app.get("port"), function () {
  console.log("Server started: http://localhost:" + app.get("port") + "/");
});
