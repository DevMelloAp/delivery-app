    require('express-async-errors');

const express = require('express');

const userRouter = require('../routes/userRoutes');
const loginRouter = require('../routes/loginRoutes');

const errorMiddleware = require('../middlewares/error');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter);
app.use('/register', userRouter);

app.use(errorMiddleware);

module.exports = app;
