const express = require("express");
const router = express.Router();
const comments = [];
router.get("/", (req, res) => {
  res.render("index", { comments });
});
router.get("/write-comment", (req, res) => {
  res.render("write-comment");
});
router.post("/send-post", (req, res) => {
  const date = new Date();
  const time =
    date.toLocaleDateString() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
  const { title, comment, author } = req.body;
  comments.push({ title, comment, author, time });
  console.log(title, comment, author);
  res.redirect("/");
});

exports.router = router;
exports.comments = comments;
