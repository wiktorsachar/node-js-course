const comments = [];
exports.getMainPage = (req, res) => {
  res.render("index", { comments });
};
exports.getWriteCommentPage = (req, res) => {
  res.render("write-comment", { comments });
  console.log(comments);
};
exports.postSendComment = (req, res) => {
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
};
