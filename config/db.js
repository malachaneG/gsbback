const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'cj654063-002.dbaas.ovh.net',//cj654063-001.privatesql
  user     : 'gsbmalachane',//gsbmalachane
  password : 'gsbmalachaneSU2020',//gsbmalachaneSU2020
  database : 'gsb'//bdgsb
});

module.exports = connection