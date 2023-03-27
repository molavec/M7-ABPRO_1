/* crea la tabla de estudiantes */
create table estudiante (
  id SERIAL NOT NULL PRIMARY KEY,
  nombre VARCHAR(30) NOT NULL,
  rut VARCHAR(30) NOT NULL,
  curso VARCHAR(30) NOT NULL,
  nivel VARCHAR(30) NOT NULL
);

/* Inserta un estudiante */
INSERT INTO estudiante (
  nombre,
  rut,
  curso,
  nivel
) values (
  'Jose Carcamo',
  '22222222-2',
  '1',
  'EXPERTO'
);

/* Obtiene todos los estudiantes */
SELECT id,nombre,rut,curso,nivel FROM estudiante;



