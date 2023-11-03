CREATE DATABASE bylanpdxjlmrw2ixoud8;

USE bylanpdxjlmrw2ixoud8;


CREATE TABLE Usuario (
    ID smallint unsigned auto_increment primary key,
    Nombre varchar(50),
    Apellido varchar(50),
    Correo varchar(255),
    Contraseña varchar(16)
);

CREATE TABLE Productos (
    ID smallint unsigned auto_increment primary key,
    Nombre varchar(50),
    Descripcion text,
    Precio mediumint unsigned,
    PorcentajeDescuento decimal(3,2),
    Almacenamiento int
);

CREATE TABLE Envio (
    ID smallint unsigned auto_increment primary key,
    ID_Producto smallint unsigned,
    Pais varchar(50),
    Ciudad varchar(50),
    Calle varchar(50),
    FechaCompra datetime,
    FechaLlegada datetime,
    Precio mediumint unsigned,
    CantidadTotalProductos mediumint,

    FOREIGN KEY (ID_Producto) REFERENCES Productos(ID)
);

CREATE TABLE CarritoCompra (
    ID smallint unsigned auto_increment primary key,
    ID_Usuario smallint unsigned,
    ID_Producto smallint unsigned,
    Precio mediumint unsigned,
    PrecioTotal mediumint unsigned,
    Cantidad mediumint unsigned
);

CREATE TABLE Boleta (
    ID smallint unsigned auto_increment primary key,
    ID_Producto smallint unsigned,
    Fecha_Hora datetime,
    Precio mediumint unsigned,
    PrecioTotal mediumint unsigned,

    FOREIGN KEY (ID_Producto) REFERENCES Productos(ID)
);

CREATE TABLE HistorialCompras (
    ID smallint unsigned auto_increment primary key,
    ID_Usuario smallint unsigned,
    ID_Producto smallint unsigned,
    ID_Envio smallint unsigned
);

CREATE TABLE EnvioDetalle (
    ID smallint unsigned auto_increment primary key,
    Pais varchar(50),
    Ciudad varchar(50)
);



