const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please tell us your first name!']
  },
  lastName: {
    type: String,
    required: [true, 'Please tell us your last name!']
  },
  phoneNumber: {
    type: String,
    required: [true, 'A customer must have a phone number'],
    trim: true,
    unique: true
},
address: {
    type: String,
    required: [true, 'A customer name must have a address'],
    trim: true,
    maxlength: [200, 'A customer address must have less or equal then 200 characters'],
    minlength: [10, 'A customer address must have more or equal then 10 characters']
},
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true
  },
  photo: String,
  role: {
    type: String,
    enum: ['user', 'staff', 'student', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  // validate password
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    // validate will only work on save or creating the user
    validate: {
      validator: function (pwd) {
        return pwd === this.password;
      },
      message: " The password confirmation did not match"
    }
  },
  passwordChangedAt: Date,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next;
  }

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.changedPasswordAfter = function (iat) {
  if (iat <= this.passwordChangedAt) {
    //return bcrypt.compareSync(password, this.passwordChangedAt);
    return true;
  } else {
    return false;
  }
};



const User = mongoose.model('User', userSchema);

module.exports = User;
