const express = require('express');
const Router = express.Router();
const {getAllComics, getComicById, addComic, updateComic, deleteComic, addComicForm,filterComic,comics} = require('../controllers/comicController');

Router.get('/comic/getAllComics', getAllComics);
Router.get('/comic/filterComic', filterComic);
Router.get('/comic', comics);
Router.get('/comic/getComicById/:_id', getComicById);
Router.get('/comic/addComicForm', addComicForm);
Router.post('/comic/addComic', addComic);
Router.delete('/comic/deleteComic/:_id', deleteComic);
Router.patch('/comic/updateComic/:_id', updateComic);

module.exports = Router;