const express = require('express');
const path = require('path');
const fs = require('fs');
const { info } = require('console');
const sql = require('./mysql')
const app = express();

//sql.start_db();

app.post('/login', (req, res) => {
  console.log('login');
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

});

app.all('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(3000, () => {
  console.log('service activate!')
});

//sql.end_db();
