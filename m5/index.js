// const testConnection = require('./orm/testConnection');
// testConnection();

const Medic = require('./orm/medico');
const Paciente = require('./orm/paciente');
const Especialidad = require('./orm/especialidad');
const Consulta = require('./orm/consulta');
const Licencia = require('./orm/licencia');

const createMedicTable = async () => {
  const result = await Medic.sync({ force: true });
  console.log('createMedicTable', result);
}

const createPacienteTable = async () => {
  const result = await Paciente.sync({ force: true });
  console.log('createPacienteTable', result);
}

const createEspecialidadTable = async () => {
  const result = await Especialidad.sync({ force: true });
  console.log('createEspecialidadTable', result);
}

const createConsultaTable = async () => {
  const result = await Consulta.sync({ force: true });
  console.log('createConsultaTable', result);
}

const createLicenciaTable = async () => {
  const result = await Licencia.sync({ force: true });
  console.log('createLicenciaTable', result);
}

const insertMedic = async () => {
  const jane = await Medic.create({ firstName: "Jane", lastName: "Doe" });
};

const execute = async () => {

  // 1. Crea tabla Especialidad
  await createEspecialidadTable();

  // 1. Crea tabla Paciente
  await createPacienteTable();

  // 1. Crea tabla Medico
  await createMedicTable();
  // await insertMedic();

  // 1. Crea tabla Consulta
  await createConsultaTable();

  // 1. Crea tabla Licencia
  await createLicenciaTable();

};

execute();
