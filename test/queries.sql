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


/* Declared insersion */
PREPARE add_estudiante (text, text, text, text) AS
    INSERT INTO estudiante 
    (
      nombre,
      rut,
      curso,
      nivel
    ) VALUES($1, $2, $3, $4);

EXECUTE addEstudiante('Bryan May', '12.345.678-9', 'guitarra', '7');


DEALLOCATE addEstudiante;


SELECT * FROM pg_class;