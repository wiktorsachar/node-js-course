const fs = require("fs");
const path = require("path");
const getTimeStamp = require("../util/timeStamp");
const createId = require('../util/createId');

const commentPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "comments.json"
);

//-------------------------------------------------- version 1 (works fine)

const loadComments = (callback) => {
  fs.readFile(commentPath, (err, data) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(data));
    }
  });
};

module.exports = class Comment {
  constructor(data) {
    this.title = data.title;
    this.comment = data.comment;
    this.author = data.author;
    this.time = getTimeStamp();
    this.id = createId(data.comment);
  }
  static fetchComments(callback) {
    loadComments(callback);
  }
  save() {
    loadComments((comments) => {
      comments.push(this);
      fs.writeFile(commentPath, JSON.stringify(comments), err => {
        console.log(err)
      });
    });
  }
};

//-------------------------------------------------- version 2 (doesn't work)

// module.exports = class Comment {
//   constructor(data) {
//     this.title = data.title;
//     this.comment = data.comment;
//     this.author = data.author;
//     this.time = getTimeStamp();
//   }
//   static fetchComments(callback) {
//     fs.readFile(commentPath, (err, data) => {
//       if (err) {
//         callback([]);
//       } else {
//         callback(JSON.parse(data));
//       }
//     });
//   }
//   save() {
//     this.fetchComments((comments) => {
//       comments.push(this);
//       fs.writeFile(commentPath, JSON.stringify(comments));
//     });
//   }
// };
