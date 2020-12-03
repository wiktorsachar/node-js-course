const path = require('path');
const express = require("express");
const app = express();
const router = require("./routes/basicRoutes");

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

app.listen(3000);
