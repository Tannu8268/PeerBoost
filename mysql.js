const { modules } = require('.');
//const mysql = require('mysql');
const mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'synchack',
  port: 3307
});

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

async function fetchData(query) {
  try {
    connection.connect();
    const [rows, fields] = await connection.promise().query(query);
    console.log('Query results:', rows);
    //rows.forEach((row) => {
    //  console.log(`ID: ${row.id}, Name: ${row.name}, Email: ${row.email}`);
    //});
    return rows;

  } catch (err) {
    console.error('Error executing query:', err);
  }
}

module.exports = {
  execute_sql,
  fetchData
};

