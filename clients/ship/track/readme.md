# ECS Track

## Getting Started

You need to install ECS Track and set API credentials before you get started

## Installation

```shell script
npm i ecs-sdk -S
```

## Usage

```js
/**
 * Main application file
 */
if (!process.env.DOMAIN) {
  process.env.DOMAIN = 'yourdomain.com';
}

if (!process.env.ECS_SECRET) {
  process.env.ECS_SECRET = '<secret>';
}

const http = require('http');
const express = require('express');

const bodyParser = require('body-parser');
const login = require('@shoppre/login');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/secured', login.authenticate, (req, res) => {
  return res.json(req.user);
  // - req.user show user details, only if user session is active and url is secured by Login
});

server.listen(8000, '0.0.0.0', (err) => {
  if (err) return console.log('Error while starting nodejs', err);
  return console.log('Server started');
});
```
