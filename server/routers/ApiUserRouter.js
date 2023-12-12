const express = require('express');
const Router = express.Router();
const {register, login, updateUser,listUsers,deleteUser,getUserById} = require('../controllers/userController');

Router.get('/login/:username/:password', login);
Router.get('/user/getUserById/:_id', getUserById);
Router.post('/user/register',register);
Router.get('/user', listUsers);
Router.delete('/user/deleteUser/:_id', deleteUser);
Router.patch('/user/update/:_id',updateUser);


module.exports = Router;