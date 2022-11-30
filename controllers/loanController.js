const Loan = require('./../model/loanModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');
const User = require('../model/userModel');

exports.getAllLoans = async (req, res) => {

  try {

    const features = new APIFeatures(Loan.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loans = await features.query;
    res.status(200).render('loans', {
      title: `Get Loans`,
      status: 'success',
      results: loans.length,
      data: loans,
      user: req.user
    });
  } catch (err) {
    res.status(404).render({
      status: 'fail',
      message: err
    });
  }
};

exports.getLoanDetailsForUser = async (req, res) => {
  try {
    const loans = await Loan.find({ 'userID': req.user._id });
    res.status(200).render('loans', {
      title: `Get Loans`,
      status: 'success',
      results: loans.length,
      data: loans,
      user: req.user
    });
  } catch (err) {
    res.status(404).render({
      status: 'fail',
      message: err
    });
  }
};

exports.getNewLoanForm = async (req, res) => {
  res.status(200).render('newLoan', {
    title: `Create New Loan`,
    user: req.user
  });
};


exports.createNewLoan = async (req, res, next) => {
  try {
    const newUser = await Loan.create({
      userID: req.user._id,
      customerName: req.user.firstName + ' ' + req.user.lastName,
      phoneNumber: req.user.phoneNumber,
      address: req.user.address,
      loanType: req.body.loantype,
      loanAmount: req.body.loanamount,
      interest: req.body.interest,
      loanTermYears: req.body.loantermyears,
      description: req.body.description,

    });
    res.status(200).render('userProfilePage1', {
      title: 'Login | Enter User Credentials'
    });
  } catch (err) {
    res.status(404).render('newLoan',{
      status: 'fail',
      message: err,
      user: req.user
    });
  }
};



  