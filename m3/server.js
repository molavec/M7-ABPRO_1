const express = require('express');
const hbs = require('hbs');
const {
  addStudent,
  getAllStudents,
  getStudentByRut,
  updateStudent,
  deleteStudent,
  getAllUsers
} = require('./lib/postgre');


const { Pool, Client } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 5432,
  database: 'softlife',
  idleTimeoutMillis: 5000,
  max: 20,
  connectionTimeoutMillis: 2000
});

pool.connect();

const database = () => {

  const query = `CREATE TABLE IF NOT EXISTS "usuarios" ("email" varchar(25), "password" varchar(25));`;
  
    pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
    }
    let arreglo = Object.values (res.rows)
    pool.end();
  });
}

database();


const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
  // res.send('Hello World!');
});



app.get('/login', (req, res) => {
  res.render('login-form');
  // res.send('Hello World!');
});


//Ruta que registra nuevos usuarios
app.get('/usuario', (req, res) => {
  res.render('register-form');
  // res.send('Hello World!');
});

//Ruta que muestra todos los usuarios existentessss
app.get('/usuarios', (req, res) => {
    getAllUsers()
    .then(users => {
      res.render('users', { users });
    })
    .catch(error => {
      console.log('Error:', error);
      res.send('Error al obtener los usuarios');
    });
});

app.listen(port, () => {
  console.log(`Servicio corriendo en el puerto ${port}`);
});