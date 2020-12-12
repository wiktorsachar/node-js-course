const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const indexRoute = require("./routes/indexRoute");
const { sendUserRoute } = require("./routes/sendUserRoute");
const usersRoute = require("./routes/usersRoute");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(indexRoute);
app.use(sendUserRoute);
app.use(usersRoute);

app.listen(3000);
