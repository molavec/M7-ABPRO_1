-- Crear tabla Paciente
CREATE TABLE Paciente
(
 rut_paciente       varchar(10) PRIMARY KEY NOT NULL,
 nombre    varchar(50) NOT NULL,
 direccion varchar(50) NOT NULL
);

-- Crear tabla Especialidad
CREATE TABLE Especialidad
(
 id_especialidad serial PRIMARY KEY NOT NULL,
 Especialidad    varchar(50) NOT NULL,
 descripcion     varchar(50) NOT NULL
);

-- Crear tabla Medico
CREATE TABLE Medico
(
 rut_medico      varchar(10) PRIMARY KEY NOT NULL,
 nombre          varchar(50) NOT NULL,
 direccion       varchar(50) NOT NULL,
 id_especialidad serial NOT NULL,
 CONSTRAINT FK_2 FOREIGN KEY ( id_especialidad ) REFERENCES Especialidad ( id_especialidad )
);

CREATE INDEX FK_2 ON Medico
(
 id_especialidad
);



-- Crear tabla Consulta
CREATE TABLE Consulta
(
 id_consulta serial PRIMARY KEY NOT NULL,
 rut_paciente varchar(10) NOT NULL,
rut_medico   varchar(10) NOT NULL,
 hora        time NOT NULL,
 fecha       date NOT NULL,
 n_box       int NOT NULL,
 id_lic      int,
 CONSTRAINT FK_4_1 FOREIGN KEY ( rut_paciente ) REFERENCES Paciente ( rut_paciente ),
  CONSTRAINT FK_5 FOREIGN KEY ( rut_medico ) REFERENCES Medico ( rut_medico )
);

CREATE INDEX FK_2 ON Consulta
(
 rut
);

CREATE INDEX FK_3 ON Consulta
(
 rut_medico
);

-- Crear tabla Licencia
CREATE TABLE Licencia
(
 id_lic      serial PRIMARY KEY NOT NULL,
 diagnostico varchar(50) NOT NULL,
 f_inicio    date NOT NULL,
 f_termino   date NOT NULL,
 rut_medico  varchar(10) NOT NULL,
 id_consulta serial NOT NULL,
 CONSTRAINT FK_4 FOREIGN KEY ( rut_medico ) REFERENCES Medico ( rut_medico ),
 CONSTRAINT FK_3 FOREIGN KEY ( id_consulta ) REFERENCES Consulta ( id_consulta )
);
CREATE INDEX FK_2 ON Licencia
(
 rut_medico
);
CREATE INDEX FK_3 ON Licencia
(
 id_consulta
);



-- Insertar Paciente
INSERT INTO Paciente (rut_paciente, nombre, direccion) VALUES ('104567895', 'CAROLINA DONOSO', 'LAS MAGNOLIAS 123');

-- Insertar especialidad
INSERT INTO Especialidad (Especialidad, descripcion) VALUES ('Otorrinolaringologo', 'trastornos del oído, nariz y garganta.');

-- Insertar Medico 
INSERT INTO Medico (nombre, rut_medico, direccion, id_especialidad) 
VALUES ('Andres Maluenda', '205697415', 'Edmundo Eluchans 355', 1);

-- Insertar Consulta
INSERT INTO Consulta (rut_paciente, rut_medico, hora, fecha, n_box) VALUES ('104567895', '205697415', '12:00:00', '2023-03-22', 1);

-- Insertar Licencia
INSERT INTO Licencia (diagnostico, f_inicio, f_termino, rut_medico, id_consulta) VALUES ('Gripe', '2023-03-20', '2023-03-24', '205697415', 1);

-- Select Paciente
SELECT * FROM Paciente;

-- Select Especialidad
SELECT * FROM Especialidad;

-- Select Medico
SELECT * FROM Medico;

-- Select Consulta
SELECT * FROM Consulta;


-- Select Licencia
SELECT * FROM Licencia;
