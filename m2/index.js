const fs = require('fs');
const { 
  addStudent,
  addStudents,
  getAllStudents,
  getStudentByRut,
  updateStudent,
  deleteStudent
} = require('./lib/postgre');

const command = process.argv[2];
if(command == 'nuevo') {
  const estudiante = {
    nombre: process.argv[3],
    rut: process.argv[4],
    curso: process.argv[5],
    nivel: process.argv[6],
  };
  // console.log('Ingresando estudiante', estudiante);
  addStudent(estudiante);
  return 0;
} else if(command == 'traer') {
  console.log('llamando a funcion para obtener los usuarios');
  getAllStudents();
  return 0;
} else if(command == 'rut') {
    const rut = process.argv[3];

  console.log('llamando a usuarios con rut: ', rut );
  getStudentByRut(rut)
  return 0;
} else if(command == 'editar') {
  const estudianteEditado = {
    nombre: process.argv[3],
    rut: process.argv[4],
    curso: process.argv[5],
    nivel: process.argv[6],
  };

  console.log('estudiante actualizado', estudianteEditado);

  updateStudent(estudianteEditado)

  return 0;
} else if(command == 'eliminar') {
    const rutDelete = process.argv[3];

  console.log('llamando a funcion para eliminar usuario', rutDelete );
  deleteStudent(rutDelete)
  return 0;
} else if(command == 'nuevos') {

  const filename = process.argv[3];

  try {
    // lee el archivo de forma sincrónica
    const estudiantes =  fs.readFileSync(filename, 'utf8');
    console.log(JSON.parse(estudiantes));

    // console.log('Ingresando estudiante', estudiante);
    addStudents(JSON.parse(estudiantes));
    return 0;

  } catch (error) {
    console.error(error);
  }

  
} else {
  console.log("No se reconoce el comando");
  process.exit(0);
};





