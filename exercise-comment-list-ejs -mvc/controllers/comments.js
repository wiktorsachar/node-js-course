const Comment = require("../models/comment");

exports.getMainPage = (req, res) => {
  Comment.fetchComments((comments) => {
    res.render("index", { comments });
  });
};
exports.getSingleComment = (req, res) => {
  const commentId = req.params.commentId;
  console.log(commentId);
  res.redirect("/");
};
exports.getWriteCommentPage = (req, res) => {
  res.render("write-comment");
  console.log(comments);
};
exports.postSendComment = (req, res) => {
  const { title, comment, author } = req.body;
  const commentTemplate = new Comment({ title, comment, author });
  commentTemplate.save();
  console.log(title, comment, author);
  res.redirect("/");
};
