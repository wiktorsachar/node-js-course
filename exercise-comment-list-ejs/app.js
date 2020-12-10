const path = require("path");
const express = require("express");
const routerData = require("./routes/basicRoutes");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(routerData.router);
app.use((req, res) => {
  res.status(404).render("404");
});
app.listen(3000);
