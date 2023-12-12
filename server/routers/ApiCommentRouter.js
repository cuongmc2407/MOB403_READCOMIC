const express = require('express');
const Router = express.Router();
const {getCommentbyIdComic, postComment} = require('../controllers/commentController');

Router.get('/comic/comments', getCommentbyIdComic);
Router.post('/comic/postComments', postComment);

module.exports = Router;