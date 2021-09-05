const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = require("./routes/routes");
const {fetchData} = require("./util/fetchData");

fetchData();
setInterval(fetchData, 36000000);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");
app.use(router);

app.listen(3000);



