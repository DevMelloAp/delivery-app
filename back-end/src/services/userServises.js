const md5 = require('md5');
const { User } = require('../database/models');

const userValidate = require('../middlewares/userValidate');
const registerValidate = require('../middlewares/registerValidate');
const db = require('../database/models');
const { JwtServiceSign } = require('./JwtService');

const create = async ({ name, email, password }) => {
registerValidate(email, password, name);
const role = 'customer';
const users = await User.findAll();
const emailList = users.map((it) => it.email);
const nameList = users.map((it) => it.name);
if ((emailList).includes(email) || nameList.includes(name)) {
const e = new Error('User already registered');
e.name = 'ConflictError';
throw e;
}
const user = await User.create({ name, email, password, role });
return user;
};

const loginService = async (email, password) => {
  userValidate(email, password);
    const userDB = await db.User.findOne({ where: { email } });
    const passwordMd5 = md5(password);
  if (userDB.password !== passwordMd5) {
    const e = new Error('Incorrect email or password');
    e.name = 'NotFoundError';
    throw e;
  }

  const token = JwtServiceSign({
    id: userDB.id,
    email: userDB.email,
  });

  return {
    name: userDB.name,
    email: userDB.email,
    role: userDB.role,
    token };
};

 module.exports = { create, loginService };
