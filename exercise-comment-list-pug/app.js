const express = require("express");
const router = require('./routes/basicRoutes')
const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(router)
app.listen(3000);
