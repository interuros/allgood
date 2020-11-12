const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

const dbURI = "mongodb+srv://jsguru:jsguru123@allgood.zzgrk.mongodb.net/allgood?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());
app.options('*', cors());

app.use('/user', userRoutes);
app.use('/item', itemRoutes);

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
  res.send("<h1>404</h1>");
});

module.exports = app;
