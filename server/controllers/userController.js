const user = require('../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const { convertleObject } = require('../utils/convertObj');
const socket = require('../socket_server')



const register = async (req, res) => {
  try {
    let { username, password, email, fullname } = req.body
    if (!username || !password || !email || !fullname) {
        return res.send({ err: 'Không được để trống dữ liệu' })
    }
    let userAvailable = await user.findOne({ username })
    if (userAvailable) {
        return res.send({ err: 'Tên người dùng đã tồn tại' })
    }
    let salt = await bcrypt.genSalt(10)
    let passwdHash = await bcrypt.hash(password, salt)
    await user.create({ username, password: passwdHash, email, fullname })
    socket.io.emit("msgRes","Register Successfully!")
    res.send({ username, password, email, fullname })
} catch (error) {
    res.status(500).render('error', { err: error.message })
}
};

const login = async (req, res) => {
  try {
    let { username, password } = req.params
    let userlogin = await user.findOne({ username })
    if (!userlogin) {
        res.send({ err: 'Tài khoản không tồn tại' })
    } else {
        let userCheckPass = bcrypt.compare(password, userlogin.password)
        userCheckPass ? res.send(userlogin) : res.send({ err: 'Mật khẩu không đúng' })
    }
} catch (error) {
  res.status(500).json({ message: error.message });
}
};
const updateUser = async (req, res) => {
  try {
    const id = req.params._id;
    console.log(req.body);

    const updateUser = await user.findOneAndUpdate({ _id: id }, req.body);
    if (!updateUser) {
        res.status(404).json({ message: 'Không tìm thấy user' });
    }
    res.redirect('/api/user');

} catch (error) {
    res.status(500).json({ message: error.message });
}
};

const listUsers = async (req, res) => {
    let listUser = await user.find({});
    res.render('user', {layout: 'main', comic: convertleObject(listUser)})

};
const deleteUser = async (req, res) => {
    try {
        const id = req.params._id;
        console.log(id);

        const deleteUser = await user.findOneAndDelete({ _id: id });
        res.redirect('/api/user');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getUserById = async (req, res) => {
    try {
        const users = await user.findOne({_id: req.params._id});
        if (!user) {
            return res.status(404).json({ error: 'Không tìm thấy user' });
        }
        res.render('update-user', {layout: 'main', user: convertleObject(users)});
    } catch (error) {
        res.status(500).json({ error: 'Lỗi server' });
    }
};
module.exports = {register, login, updateUser, listUsers, deleteUser,getUserById};