const express = require("express");
const commentsController = require('../controllers/comments');
const router = express.Router();
router.get("/", commentsController.getMainPage);
router.get("/write-comment", commentsController.getWriteCommentPage);
router.post("/send-comment", commentsController.postSendComment);

exports.router = router;
