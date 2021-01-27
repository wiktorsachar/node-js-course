const getTimeStamp = require("../util/timeStamp");
const comments = [];
module.exports = class Comment {
  constructor(data) {
    this.title = data.title;
    this.comment = data.comment;
    this.author = data.author;
    this.time = getTimeStamp();
  }
  save() {
    comments.push(this);
  }
  static fetchComments() {
    return comments;
  }
};
