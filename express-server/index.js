const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config()
const port = 5000

const cors = require('cors')
const whiteList = ['*']

//const indexRouter = require('./v1/routes/index');
const bookingsRouter = require('./src/v1/routes/bookingRoutes');
const customersRouter = require('./src/v1/routes/customerRoutes');
const toursRouter = require('./src/v1/routes/tourRoutes');
const usersRouter = require('./src/v1/routes/userRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.ATLAS_URI)
   .then(() =>  console.log('connection successful'))
   .catch((err) => console.error(err));

var app = express();
app.use(cors({origin: whiteList}))

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

//app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));


//body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

//app.use('/api', indexRouter);
app.use('/bookings', bookingsRouter);
app.use('/customers', customersRouter);
app.use('/tours', toursRouter);
app.use('/users', usersRouter);

app.get('/api', (req, res) => {
  res.send('Booking management api')
})

app.use('/', bookingsRouter);
//app.get('/', (req, res) => {
//  res.send('Booking management home page')
//})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
//app.use(function(err, req, res, next) {
  // set locals, only providing error in development
//  res.locals.message = err.message;
//  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
//  res.status(err.status || 500);
//  res.render('error');
//});


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app;
