const { modules } = require('.');
const config = require('./config');
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: config.mysql_host,
  user: 'root',
  password: config.mysql_passwd,
  database: config.db_info,
  port: config.mysql_port
});

function start_db() {
  try {
    connection.connect();
  } catch (error) {
    console.log(error);
  }
}

function execute_sql(query) {
  try {
    connection.query(query, function(error, results, fields) {
      if (error) throw error;
      return results;
    });
  } catch (error) {
    console.log(error);
  }
}

function end_db() {
  try {
    connection.end();
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  start_db,
  end_db,
  execute_sql
};

