const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config()

const cors = require('cors')
const whiteList = ['https://jhn-cde.github.io', 'http://localhost:19000', 'http://localhost:19006']

const indexRouter = require('./v1/routes/index');
const bookingsRouter = require('./v1/routes/bookingRoutes');
const customersRouter = require('./v1/routes/customerRoutes');
const toursRouter = require('./v1/routes/tourRoutes');
const usersRouter = require('./v1/routes/userRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.ATLAS_URI)
   .then(() =>  console.log('connection successful'))
   .catch((err) => console.error(err));

var app = express();
app.use(cors({origin: whiteList}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', indexRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/customers', customersRouter);
app.use('/api/tours', toursRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
