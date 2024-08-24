const express = require('express');
const path = require('path');
const fs = require('fs');
const { info } = require('console');
const sql = require('./mysql')
const app = express();
const cors = require('cors');
const { isBuiltin } = require('module');

const corsOptions = {
  origin: 'http://10.19.237.251:3000/',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "http://10.19.237.251:3000");
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.get('/myhome', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'home.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'login.html'));
})

app.post('/login', (req, res) => {
  const data = req.body;
  console.log('Received JSON data:', data);
  console.log('Received User:', data.username);
  console.log('Received password:', data.password);

  let query = "SELECT * FROM user_info WHERE username = " + '\'' + data.username + '\'' + " AND password = " + '\'' + data.password + '\'';
  //let result = sql.execute_sql(query);

  if (sql.fetchData(query)) {
    res.status(200).send('ok');
  }
  else {
    console.log('failed!');
    res.status(500).send('error');
  }
});

app.post('/regsiter', (req, res) => {
  console.log('register');
});

app.post('/post_question', (req, res) => {

});

app.post('/adopt_question', (req, res) => {

});

app.get('/search_question', (req, res) => {

});

app.get('/', (req, res) => {
  res.redirect('/login');
});

app.all('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(3000, () => {
  console.log('service activate!')
});

