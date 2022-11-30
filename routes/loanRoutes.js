const express = require('express');
const loanController = require('../controllers/loanController');
const authHandlers = require('../controllers/authController');

const router = express.Router();

router.get('/viewloans',authHandlers.protect);
router.get('/viewAllloan', authHandlers.protect, loanController.getLoanDetailsForUser);
router.get('/loans',authHandlers.protect,loanController.getAllLoans);
router.get('/newLoan', authHandlers.protect,loanController.getNewLoanForm);
router.post('/newLoan', authHandlers.protect, loanController.createNewLoan);

module.exports = router;
