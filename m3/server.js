const express = require('express');
const hbs = require('hbs');
const {
  addStudent,
  getAllStudents,
  getStudentByRut,
  updateStudent,
  deleteStudent
} = require('./lib/postgre');


const { Pool, Client } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 5432,
  database: 'm7-abpro_1',
  idleTimeoutMillis: 5000,
  max: 20,
  connectionTimeoutMillis: 2000
});

pool.connect();


const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
  // res.send('Hello World!');
});

app.get('/login-form', (req, res) => {
  res.render('login-form');
  // res.send('Hello World!');
});

app.get('/register-form', (req, res) => {
  res.render('register-form');
  // res.send('Hello World!');
});

app.get('/usuarios', (req, res) => {
  const query = 'SELECT * FROM usuarios;';
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
    }
    res.render(query, (err))
  })
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});