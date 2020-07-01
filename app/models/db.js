// Modulo conexión a la base de datos MySQL
const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// se crea la conexión a MySQL con las credenciales del archivo de configuración
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// abre la conexión con MySQL
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;