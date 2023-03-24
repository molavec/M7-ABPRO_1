create table estudiante (
  id SERIAL NOT NULL PRIMARY KEY,
  nombre VARCHAR(30) NOT NULL,
  rut VARCHAR(30) NOT NULL,
  curso VARCHAR(30) NOT NULL,
  nivel VARCHAR(30) NOT NULL
)