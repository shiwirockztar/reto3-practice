var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var patientsRouter = require('./routes/patients');

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node MongoDB API",version: "1.0.0",
      description: "This project is an example betwen nodejs (express) and MongoDB Atlas tecnologies `for reto 3 sofka-cantera`._ " +
          "_Some useful links:_ Swager editor at [https://editor.swagger.io](https://editor.swagger.io) and Swagger documentation " +
          "[https://swagger.io/specification/](https://swagger.io/specification/) - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)" ,
    },
      servers: [{ url: "http://localhost:9000" }]
    },
    apis: [`${path.join(__dirname, "./routes/patients.js")}`],
}


var app = express();

//utilizando mongoose para conectar mongodb .
const mongodb='mongodb+srv://shiwirockztar:shiwirockztar@cluster0.x0fltxk.mongodb.net/dataBaseSofka?retryWrites=true&w=majority';
const mongoose = require('mongoose');
mongoose.connect(mongodb,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log('mongoDB esta conectado'))
    .catch(err=> console.log(err));

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', patientsRouter);
app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

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
