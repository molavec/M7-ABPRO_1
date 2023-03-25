const { Pool, Client } = require('pg');

const NIVEL = {
  EXPERTO: 'EXPERTO',
  BASICO: 'BASICO'
}

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '2023',
  port: 5432,
  database: 'm7-abpro_1',
});

pool.connect();

/**
 * add
 */
const addStudent = (student) => {
  //TODO
  const query = '';
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
    }
    console.log('result: ', res);  
  });
}


/**
 * select all student
 */
const getAllStudents = () => {
  //TODO
  const query = '';
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
    }
    console.log('result: ', res);  
  });
}


/**
 * select by rut 
 */
const getStudentByRut = () => {
  //TODO
  const query = '';
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
    }
    console.log('result: ', res);  
  });
}


/**
 * update Student
 */
const updateStudent = () => {
  //TODO
  const query = '';
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
    }
    console.log('result: ', res);  
  });
}


/**
 * delete student
 */
const deleteStudent = () => {
  //TODO
  const query = '';
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
    }
    console.log('result: ', res);  
  });
}


// ejecuta la funcion
var data = {
  nombre: 'Juan Perez',
  rut: '11111111-1',
  curso: '1',
  nivel: NIVEL.EXPERTO,
}


var estudiante1 = {
  nombre: 'Pablito',
  rut: '20369584-9',
  curso: 'Artes Visuales',
  nivel: '10'
}

var updateStudent1 = {
  nombre: 'Pablo Lazcano',
  rut: '20569874-2',
  curso: 'Programacion en Cobol',
  nivel: '1'
}

addStudent(estudiante1)
updateStudent(updateStudent1)


// addStudent(data);
// getAllStudents();
// getStudentByRut(rut);
// updateStudent(data);
// deleteStudent(rut);


nombre = nombre,
rut = rut,
curso = curso,
nivel = nivel
where 
id = 'id';