const fs = require('fs');
const { 
  addStudents,
} = require('./lib/postgre');



const command = process.argv[2];

if(command == 'nuevos') {

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





