create table estudiante (
  id SERIAL NOT NULL PRIMARY KEY,
  nombre VARCHAR(30) NOT NULL,
  rut VARCHAR(30) NOT NULL,
  curso VARCHAR(30) NOT NULL,
  nivel VARCHAR(30) NOT NULL
);

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

SELECT id,nombre,rut,curso,nivel FROM estudiante;