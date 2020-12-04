const express = require("express");
const routerData = require('./routes/basicRoutes')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(routerData.router)
app.listen(3000);
