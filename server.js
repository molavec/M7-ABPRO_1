const express = require('express');
const hbs = require('hbs');
const { 
  addStudent,
  getAllStudents,
  getStudentByRut,
  updateStudent,
  deleteStudent
} = require('./lib/postgre');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
  // res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});