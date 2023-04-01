CREATE DATABASE banco;

CREATE TABLE transacciones (
  descripcion varchar(50),
  fecha varchar(10),
  monto decimal,
  cuenta int
);

create table cuentas (
  id INT,
  saldo decimal CHECK(saldo >= 0)
);

Insert into cuentas values (1, 20000);


select * from cuentas;
select * from transacciones;
