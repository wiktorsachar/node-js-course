const express = require("express");
const router = express.Router();
const users = [];

router.post("/send-user", (req, res) => {
  const { name } = req.body;
  users.push(name);
  res.redirect("/users");
});

exports.sendUserRoute = router;
exports.users = users;
