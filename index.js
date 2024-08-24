const express = require('express');
const path = require('path');
const fs = require('fs');
const { info } = require('console');
const sql = require('./mysql')
const app = express();

//sql.start_db();
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'login.html'));
})

app.post('/login', (req, res) => {
  const { user, password } = req.body;
  console.log('Received User:', user);
  console.log('Received password:', password);

  let query = "SELECT * FROM user_id WHERE username = " + user + " AND password = " + password;
  //let result = sql.execute_sql(query);

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

//sql.end_db();
