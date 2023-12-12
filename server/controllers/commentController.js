const comment = require('../models/comment');
const express = require('express');

const getCommentbyIdComic = async (req, res) => {
  try {
    let { _id } = req.query
    let commentlist = await comment.find({ comicId: _id }, { comicId: 0, _id: 0 }).populate('userId', 'fullname')
    res.send(commentlist)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const postComment = async (req, res) => {
  try {
    let { comicId, userId, content, commenttime } = req.body
    await comment.create({ comicId, userId, content, commenttime })
    res.send({comicId, userId, content, commenttime})
} catch (error) {
    res.status(500).json( { message: error.message } )
}
};
module.exports = { getCommentbyIdComic, postComment };