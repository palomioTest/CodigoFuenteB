const { Pool } = require("pg");
require("dotenv").config();

// Leer únicamente desde la variable de entorno
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn("ADVERTENCIA: La variable de entorno DATABASE_URL no está definida.");
}

const pool = new Pool({ connectionString });

module.exports = { pool };
