const express = require('express');
const path = require('path');
const fs = require('fs');
const { info } = require('console');
const sql = require('./mysql')
const app = express();

app.use(express.json());

sql.start_db();

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'login.html'));
})

app.post('/login', (req, res) => {
  const data = req.body;
  console.log('Received JSON data:', data);
  console.log('Received User:', data.username);
  console.log('Received password:', data.password);

  let query = "SELECT * FROM user_id WHERE username = " + data.username + " AND password = " + data.password;
  //let result = sql.execute_sql(query);

  if (sql.fetchData(query)) {
    res.status(200);
  }
  else {
    res.status(500);
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

//app.get('/home', (req, res) => {
//  res.sendFile(path.join(__dirname, 'HTML', 'home.html'));
//});

app.all('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(3000, () => {
  console.log('service activate!')
});

sql.end_db();
