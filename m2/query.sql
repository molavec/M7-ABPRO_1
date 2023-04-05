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


PREPARE insertstudent(text, text, text, text) AS
  INSERT INTO estudiante (
  nombre,
  rut,
  curso,
  nivel
) values (
  $1,
  $2,
  $3,
  $4
);

DEALLOCATE insertstudent;

EXECUTE insertstudent('Bryan May', '12.345.678-9', 'guitarra', '12');

SELECT * From estudiante;

