const mongoose = require('mongoose');
const comicSchema = new mongoose.Schema({
    name: String,
    description: String,
    author: String,
    publicationYear: Number,
    coverImage: String,
    images: {type: Array},
})

const comic = mongoose.model('comic', comicSchema);
module.exports = comic;