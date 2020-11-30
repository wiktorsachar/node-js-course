const express = require("express");
const app = express();

// exercise 2
// app.use((req, res, next) => {
//   console.log("something to log!");
//   next();
// });
// app.use((req, res) => {
//   res.send("<h1>something to response!</h1>");
// });

// exercise 3
app.use("/users", (req, res) => {
  res.send("<h1>'/users' dummy response</h1>");
});
app.use("/", (req, res) => {
  res.send("<h1>'/' dummy response</h1>");
});

app.listen(3001);
