const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    comicId: { type: mongoose.Schema.Types.ObjectId, ref: 'comic' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    content: String,
    commenttime: { type: String},
  });

const comment = mongoose.model('comment', commentSchema);
module.exports = comment;