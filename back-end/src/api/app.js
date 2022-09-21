require('express-async-errors');
const cors = require('cors');

const express = require('express');

const userRouter = require('../routes/userRoutes');
const loginRouter = require('../routes/loginRoutes');

const errorMiddleware = require('../middlewares/error');

const app = express();

const accessControl = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  app.use(cors());
  next();
};

app.use(accessControl);
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter);
app.use('/register', userRouter);

app.use(errorMiddleware);

module.exports = app;
