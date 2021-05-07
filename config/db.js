const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'cj654063-002.dbaas.ovh.net',//cj654063-002.dbaas.ovh.net / 127.0.0.1
  port     : '35305',
  user     : 'gsbmalachane',//gsbmalachane / root
  password : 'gsbmalachaneSU2020',//gsbmalachaneSU2020 / root
  database : 'gsbmalachane'//gsb
});

module.exports = connection