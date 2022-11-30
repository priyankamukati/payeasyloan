const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    userID: {
        type: mongoose.ObjectId
    },
    customerName: {
        type: String
      },
    phoneNumber: {
        type: String,
    },
    address: {
        type: String,
    },
    loanAmount: {
        type: Number,
        min: 0
    },
    interest: {
        type: Number,
        min: 0
    },
    loanTermYears: {
        type: Number,
        min: 0
    },
    loanType: {
        type: String,
        required: [true, 'Please provide a loan type'],
        trim: true,
        maxlength: [40, 'A loan type must have less or equal then 40 characters'],
        minlength: [5, 'A loan type must have more or equal then 5 characters']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
        trim: true,
        maxlength: [100, 'A description must have less or equal then 100 characters'],
        minlength: [10, 'A description must have more or equal then 10 characters']
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    insertedDate:
    {
        type: Date,
        default: Date.now
    }
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;