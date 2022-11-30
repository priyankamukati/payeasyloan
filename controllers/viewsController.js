

exports.getLandingPAge = async (req, res) => {
  res.status(200).render('overview', {
    title: `Over View`
  
  });
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

exports.getLoginForm1 = (req, res) => {
  res.status(200).render('userProfilePage', {
    title: 'Sign in New User'
  });
};

exports.getAboutUsForm = (req, res) => {
  res.status(200).render('aboutus', {
    title: 'About us'
  });
};
exports.getFAQForm = (req, res) => {
  res.status(200).render('FAQ', {
    title: 'About us'
  });
};

// exports.getLoginUser = (req, res) => {
//   const {email, password} = req.body;
//   res.status(200).render('login', {
//     title: 'Log into your account'
//   });
// };

