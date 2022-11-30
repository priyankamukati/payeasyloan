const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser =require('body-parser')


const pug = require('pug');


const viewRouter = require('./routes/viewRoutes');
const userRouter = require('./routes/userRoutes');
const loanRouter = require('./routes/loanRoutes');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1) GLOBAL MIDDLEWARES
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 3) ROUTES


app.use('/', viewRouter);
app.use('/', userRouter);
app.use('/', loanRouter);

module.exports = app;



