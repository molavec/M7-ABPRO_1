const { Pool, Client } = require('pg');

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const command =  process.argv[2];
console.log('command', command);

if(command == 'nuevo') {
  
  const estudiante = {
    nombre: process.argv[3],
    rut: process.argv[4],
    curso: process.argv[5],
    nivel: process.argv[6],
  };

  console.log('Ingresando estudiante', estudiante);

  addStudent(estudiante);

  return 0;
}
if(command == 'traer') {
  console.log('llamando a funcion para obtener los usuarios');
  getAllStudents();
  return 0;
}
if(command == 'getByRut') {
    const rut = {
      rut:process.argv[7]
    }

  console.log('llamando a funcion para eliminar usuario', rut );
  getStudentByRut(rut)
  return 0;
}
if(command == 'actualizar') {
  const estudianteEditado = {
    nombre: process.argv[8],
    rut: process.argv[9],
    curso: process.argv[10],
    nival: process.argv[11],
  };

  console.log('estudiante actualizado', estudianteEditado);

  updateStudent(estudianteEditado)

  return 0;
}
if(command == 'elimina') {
    const rutDelete = {
      rut:process.argv[12]
    }

  console.log('llamando a funcion para eliminar usuario', rutDelete );
  deleteStudent(rutDelete)
  return 0;
}

console.log("no se reconoce ningun comando :(")
return -1;







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
const addStudent = (estudiante) => {
  //TODO
  const query = `INSERT INTO estudiante (nombre,rut,curso,nivel) value (${estudiante.nombre}, ${estudiante.rut}, ${estudiante.curso}, ${estudiante.nivel})`;
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
    }
    console.tables('result: ', res);  
  });
}


/**
 * select all student
 */
const getAllStudents = () => {
  //TODO
  const query = 'SELECT * FROM estudiante;';
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
    }
    console.table(res.rows);  
  });
}


/**
 * select by rut 
 */
const getStudentByRut = (rut) => {
  //TODO
  const query = `select * from estudiante where rut = ${rut.rut} `;
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
  const query = 'SELECT * FROM estudiante';
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
const deleteStudent = (rut) => {
  console.log('Ejecucion delete...')
  //TODO
  const query = `DELETE FROM estudiante WHERE rut='${rut}'`;
  pool.query(query, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      return;
    }

    if(res.rowCount > 0) {
      console.log('Se elimina el usuario');  
    } else {
      console.log('No se encontró el usuario a eliminar.');
    }
  });
}


// ejecuata la funcion
var data = {
  nombre: 'Juan Perez',
  rut: '11111111-1',
  curso: '1',
  nivel: NIVEL.EXPERTO,
}

var rut = "22222222-2";

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




// getAllStudents();
// getStudentByRut(rut);
// deleteStudent(rut);

