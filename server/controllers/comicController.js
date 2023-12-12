const comic = require('../models/comic');
const express = require('express');


const { convertleObject } = require('../utils/convertObj');


// GET: Lấy danh sách truyện

const getAllComics = async (req, res) => {
    let { _id, read } = req.query
    read = (read === 'true')
    if (_id && read) {
        let readbook = await comic.findOne({ _id }, { images: 1 })
        return res.send(readbook)
    } else if (_id && !read) {
        let bookDetail = await comic.findOne({ _id }, { images: 0 })
        return res.send(bookDetail)
    }
    let listbooks = await comic.find({}, { _id: 1, name: 1, coverImage: 1 })
    res.send(listbooks)
    
};
const comics = async (req, res) => {
    let listbooks = await comic.find({});
    res.render('home', {layout: 'main', comic: convertleObject(listbooks)})
};
const filterComic = async (req, res, next) => {
    try {
        let { name } = req.query
        let listBookFilter = await comic.find({ name: new RegExp(name, 'i') }, { _id: 1, name: 1, name: 1 })
        res.send(listBookFilter)
    } catch (error) {
        res.status(500).render('error', { message: error.message })
    }
}
//tìm truyện theo id 
const getComicById = async (req, res) => {
    try {
        const comics = await comic.findOne({_id: req.params._id});
        if (!comic) {
            return res.status(404).json({ error: 'Không tìm thấy truyện' });
        }
        res.render('update-comic', {layout: 'main', comic: convertleObject(comics)});
    } catch (error) {
        res.status(500).json({ error: 'Lỗi server' });
    }
};
//thêm truyện
const addComic = async (req, res) => {
    try {
        console.log(req.body);
        const newComic = new comic(req.body);
        // console.log(newComic);
        const io = req.body.image.split(',');
        newComic.images = io.map((item) => item.trim());
        const saveComic = await newComic.save();
        res.redirect('/api/comic');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const addComicForm = async (req, res) => {
    res.render('add-comic', {layout: 'main'});
}
const updateComic = async (req, res) => {

    try {
        const id = req.params._id;
        console.log(req.params._id);
        console.log(req.body);
        const newComic = new comic(req.body);
        const io = req.body.image.split(',');
        newComic._id = id;
        newComic.images = io.map((item) => item.trim());
        const updateComic = await comic.findOneAndUpdate({ _id: id }, newComic);
        if (!updateComic) {
            res.status(404).json({ message: 'Không tìm thấy truyện' });
        }
        res.redirect('/api/comic');

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const deleteComic = async (req, res) => {
    try {
        const id = req.params._id;
        console.log(id);

        const deletecomic = await comic.findOneAndDelete({ _id: id });
        res.redirect('/api/comic');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {comics, getAllComics, getComicById, addComic, updateComic, deleteComic, addComicForm,filterComic};