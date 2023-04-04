  const testConnection = require('./orm/testConnection');
  testConnection();

 const Medic = require('./orm/medico');
 const Patient = require('./orm/paciente');
 const Speciality = require('./orm/especialidad');
 const Consult = require('./orm/consulta');
 const License = require('./orm/licencia');

 const createMedicTable = async () => {
   const result = await Medic.sync({ force: true });
   console.log('createMedicTable', result);
 }

 const createPatientTable = async () => {
   const result = await Patient.sync({ force: true });
   console.log('createPatientTable', result);
 }

 const createSpecialityTable = async () => {
   const result = await Speciality.sync({ force: true });
   console.log('createSpecialityTable', result);
 }

 const createConsultTable = async () => {
   const result = await Consult.sync({ force: true });
   console.log('createConsultTable', result);
 }

 const createLicenseTable = async () => {
   const result = await License.sync({ force: true });
   console.log('createLicenseTable', result);
 }

 const execute = async () => {

    //1. Crea tabla Especialidad
   await createSpecialityTable();

    //1. Crea tabla Paciente
   await createPatientTable();

    //1. Crea tabla Medico
   await createMedicTable();

    //1. Crea tabla Consulta
   await createConsultTable();

    //1. Crea tabla Licencia
   await createLicenseTable();

   return Promise.resolve();

 };

 const insert = async () => {
 //Crea un paciente
 await Patient.create({
   patient_rut: '18365777-0',
   patient_name: 'Juan Pérez',
   patient_add: 'Av. Siempre Viva 123'
 })
   .then(patient => {
     console.log(`Nuevo paciente creado: ${patient.patient_name}`);
   })
   .catch(error => {
     console.error('Error al crear nuevo paciente:', error);
   });

// Crea una especialidad

 await Speciality.create({
   speciality: 'Cardiología',
   description: 'Especialidad médica que se encarga de enfermedades del corazón y del aparato circulatorio.'
 }).then(speciality => {
   console.log(`Especialidad creada con éxito:\n${JSON.stringify(speciality, null, 2)}`);
 }).catch(error => {
   console.error('Error al crear especialidad:', error);
 });

// Crea un médico

 await Medic.create({
   medic_rut: '8963452-7',
   medic_name: 'Juan Perez',
   medic_add: 'Calle Falsa 123',
   speciality_id: 1
 })
   .then(medic => {
     console.log('Médico creado:', medic.toJSON());
   })
   .catch(error => {
     console.error('Error al crear médico:', error);
   });


// Crea una consulta

await Consult.create({
   time: '10:00:00',
   date: '2023-04-01',
   id_box: 'A101',
   patient_rut: '18365777-0',
   medic_rut: '8963452-7',
 }).then(consulta => {
   console.log('Consulta creada:', consulta.toJSON());
 }).catch(error => {
   console.error('Error al crear la consulta:', error);
 });

// Crea una licencia

await License.create({
   diagnostic: 'Dolor de espalda',
   start_date: '2023-04-01',
   end_date: '2023-04-15',
   medic_rut: '8963452-7',
   consult_id: 1
 }).then((newLicense) => {
   console.log(newLicense);
 }).catch((err) => {
   console.error(err);
 });
}

execute().then(() => {
  insert ();
});