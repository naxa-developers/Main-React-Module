/* eslint-disable */
const express = require('express');
const crypto = require('crypto');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const port = '3000';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

const users = [];

app.post('/api/register/', (req, res, next) => {
  const user = { ...req.body };
  users.push(user);

  return res.status(201).json({
    user,
  });
});

app.post('/api/login/', (req, res, next) => {
  const username = req.body.username;

  if (users.some((user) => user.username === username)) {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(crypto.randomBytes(32)), crypto.randomBytes(16));
    let token = cipher.update(username);
    token = Buffer.concat([token, cipher.final()]);
    token = token.toString('hex');

    return res.status(201).json({
      username,
      token,
    });
  }

  return res.status(400).json({
    message: `No user found with name ${username}`,
  });
});

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Server Running on port ${port}`));
