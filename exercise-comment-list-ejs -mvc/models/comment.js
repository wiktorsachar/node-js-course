const fs = require("fs");

const getTimeStamp = require("../util/timeStamp");
// const comments = []; <-- previous version
module.exports = class Comment {
  constructor(data) {
    this.title = data.title;
    this.comment = data.comment;
    this.author = data.author;
    this.time = getTimeStamp();
  }
  save() {
    //comments.push(this); <-- previous version
    const comments = this.fetchComments();
    comments.push(this);
    fs.writeFile(
      "../data/comments.json",
      JSON.stringify(comments),
      (err, data) => {}
    );
  }
  static fetchComments() {
    //return comments; <-- previous version
    try {
      const comments = fs.readFile("../data/comments.json", (err, data) => {
        return JSON.parse(data);
      });
      return comments;
    } catch {
      return [];
    }
  }
};
