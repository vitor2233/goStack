require('dotenv').config();

export default {
  secret: process.env.AUTH_MD5,
  expiresIn: '2d',
};
