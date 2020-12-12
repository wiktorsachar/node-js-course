const path = require("path");
const express = require("express");
const indexRoute = require('./routes/indexRoute')
const routerData = indexRoute;
const bodyParser = require("body-parser");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(routerData.router);
app.listen(3000);
