const pg = require("pg");
const express = require("express");
const app = express();
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/acme_notes_categories_db"
);
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(require("morgan")("dev"));

// Initialize function
const init = async () => {
  await client.connect();
  let SQL = `
    DROP TABLE IF EXISTS departments;
    DROP TABLE IF EXISTS employees;
    CREATE TABLE department
      id SERIAL PRIMARY KEY,
      name VARCHAR(100)
    );
    CREATE TABLE employees(
      id SERIAL PRIMARY KEY,
      name VARCHAR(100)
      created_at TIMESTAMP DEFAULT now(),
      updated_at TIMESTAMP DEFAULT now(),
      ranking INTEGER DEFAULT 3 NOT NULL,
      department_id INTEGER REFERENCES department(id) NOT NULL
    );
  `;
  SQL = await client.query(SQL);
};
