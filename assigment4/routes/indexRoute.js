const express = require("express");
const router = express.Router();
const users = [];

router.get("/", (req, res) => {
  res.render("index", { users });
});
router.get("/users", (req, res) => {
  res.render("users", { users });
});
router.post("/send-user", (req, res) => {
  const { name } = req.body;
  users.push(name);
  res.redirect("/users");
});

exports.router = router;
exports.users = users;
