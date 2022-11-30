const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();
router.post('/signup', authController.getSignInForm);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/viewAllUser', userController.getAllUsers);

module.exports = router;
