const path = require("path");
const express = require("express");
const routerData = require("./routes/basicRoutes");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine(
  "handlebars",
  exphbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "basic-layout",
    extname: "handlebars",
  })
);
app.set("view engine", "handlebars");
app.set("views", "views");
app.use(routerData.router);
app.use((req, res) => {
  res.status(404).render("404");
});
app.listen(3000);
