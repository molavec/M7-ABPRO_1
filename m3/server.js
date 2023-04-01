const express = require('express');
const hbs = require('hbs');
const { Pool, Client } = require('pg');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const {
  loginUser,
  registerUser,
  getAllUsers,
  deleteUser,
} = require('./lib/postgre');



app.use(bodyParser.urlencoded({ extended: true }));


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

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/login-form', (req, res) => {
  res.render('login-form');
});

app.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const result = await loginUser(email, password);
  res.send(result);
});


//Ruta que muestra formulario para registrar nuevos usuarios
app.get('/usuario', (req, res) => {
  res.render('register-form');
});

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //Registra usando la funcion registerUser
  registerUser(email, password);
  //Redirige a la pagina de confimacion
  res.redirect('/confirmation');
});

app.get('/confirmation', (req,res)=>{
  res.send('¡Gracias por registrarte!');
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


app.get('/delete/:email', async (req, res) => {
  // console.log(req.params.email);

  const email = req.params.email;

  const result = await deleteUser(email);


  res.send(result);
});


app.listen(port, () => {
  console.log(`Servicio corriendo en el puerto ${port}`);
});