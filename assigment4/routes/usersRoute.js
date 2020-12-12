const express = require("express");
const { users } = require("./sendUserRoute");
const router = express.Router();

router.get("/users", (req, res) => {
  res.render("users", { users });
});

module.exports = router;
