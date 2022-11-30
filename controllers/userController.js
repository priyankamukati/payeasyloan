const User = require('./../model/userModel');
const APIFeatures = require('./../dataBaseManager/userDbContext');

exports.getAllUsers = async (req, res, next) => {
  try {
    const features = new APIFeatures(User.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
  const users = await User.find();
  res.status(200).render('users', {
    title: `Get Users`,
    status: 'success',
    results: users.length,
    data: users
  });
} catch (err) {
  res.status(404).render({
    status: 'fail',
    message: err
  });
}
};

exports.createUser = async (req, res) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.password // this needs to be changed
  });

  res.status(201).json({
    status: 'success',
    data: newUser
   
  });
};
exports.deleteMe = async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.status(204).json({
    status: 'success',
    data: null
  });
};


exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // loan.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};





exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      message: 'User data got deleted'
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


exports.getSignInForm = (req, res) => {
  res.status(200).render('newUser', {
    title: 'Sign in New User'
  });
};
exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getLoginUser = (req, res) => {
  const {email, password} = req.body;
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

