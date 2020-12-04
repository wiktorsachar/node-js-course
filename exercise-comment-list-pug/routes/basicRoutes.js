const express = require("express");
const router = express.Router();
const comments = [];
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/write-comment", (req, res) => {
  res.render("write-comment");
});
router.post("/send-post", (req, res) => {
  const { comment, author } = req.body;
  comments.push({ comment, author });
  console.log(comment, author);
  res.redirect("/");
});

exports.router = router;
exports.comments = comments;
