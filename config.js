const fs = require('fs');

try {
  const config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))
  if (config) {
    console.log('Config loaded successfully:');
    console.log(config);
  }
  else {
    console.log('Failed to load config.');
  }

  /*load json configuration*/
  let mysql_host = config.mysql.host;
  let mysql_port = config.mysql.port;
  let mysql_passwd = config.mysql.password;

  module.exports = {
    mysql_host,
    mysql_port,
    mysql_passwd
  };

}
catch (error) {
  console.log('Parse Json Failed! error code: ', error);
}
