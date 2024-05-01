CREATE DATABASE UCentral6;


USE UCentral6;

GO;
    CREATE SCHEMA Datos;
GO;

CREATE TABLE Datos.Membresia(
    idMembresia INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    Nombre VARCHAR(50) MASKED WITH (FUNCTION ='partial(1,"xxxxx",1)') NOT NULL,
    Apellido VARCHAR (50) NOT NULL,
    Telefono VARCHAR (12) MASKED WITH (FUNCTION = 'default()') NULL,
    Email VARCHAR (60) MASKED WITH (FUNCTION = 'email()') NOT NULL,
    CodDesc INT MASKED WITH (FUNCTION = 'random(1,100)') NULL,
);

ALTER TABLE Datos.Membresia
ALTER COLUMN Apellido ADD MASKED WITH (FUNCTION = 'partial(2,"----",0)');

INSERT INTO Datos.Membresia VALUES 
('HERNAN', 'LOZANO', '32111133345','hlozano@ucentral.edu.co',100),
('DARIO', 'ROJAS', '3211345345','drojas1@ucentral.edu.co',20),
('PEPE', 'GRILLO', '32145633345','pepe@ucentral.edu.co',100),
('PABLO', 'GUZMAN', '328563133345','pablo@ucentral.edu.co',100);

GO;

SELECT * FROM Datos.Membresia;

--- CREATE USER 

CREATE USER Test WITHOUT LOGIN;

GRANT SELECT ON SCHEMA::Datos TO Test;

EXECUTE AS USER = 'test';

SELECT * FROM Datos.Membresia;

REVERT;

--- CREATE USER WITH LOGIN
CREATE LOGIN PruebaCentral WITH PASSWORD = 'Pueba123';

CREATE USER PruebaCentral FOR LOGIN PruebaCentral;

GRANT SELECT ON SCHEMA::Datos TO PruebaCentral;

EXECUTE AS USER = 'test';

SELECT * FROM Datos.Membresia;

REVERT;













