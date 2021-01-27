const Comment = require("../models/comment");

exports.getMainPage = (req, res) => {
  res.render("index", { comments: Comment.fetchComments() });
};
exports.getWriteCommentPage = (req, res) => {
  res.render("write-comment", { comments: Comment.fetchComments() });
  console.log(comments);
};
exports.postSendComment = (req, res) => {
  const { title, comment, author } = req.body;
  const commentTemplate = new Comment({ title, comment, author });
  commentTemplate.save();
  console.log(title, comment, author);
  res.redirect("/");
};
