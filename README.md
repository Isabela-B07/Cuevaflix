# Aplicación Web de Gestión de Películas

## Ingeniería Web II

##  Descripción del Proyecto

Este proyecto consiste en el desarrollo de una **Aplicación Web para la gestión de películas y series**, orientada al rol de **Administrador**, permitiendo registrar y administrar producciones audiovisuales que posteriormente podrán ser publicadas en una plataforma de entretenimiento similar a Cuevana, pero sin contenido ilegal.

La aplicación fue desarrollada siguiendo una **arquitectura monolítica con separación entre frontend y backend**, donde el backend expone una **API REST** encargada de gestionar la información de la plataforma.

Actualmente la aplicación permite administrar:

* Géneros
* Directores
* Productoras
* Tipos de multimedia
* Producciones (películas y series)

La base de datos se encuentra alojada en la nube utilizando **MongoDB Atlas**.

---

# Tecnologías Utilizadas

* Node.js
* Express.js
* MongoDB
* MongoDB Atlas
* Mongoose
* Postman

---

# 🏗 Arquitectura

La aplicación sigue una arquitectura **monolítica**, donde el **Frontend y Backend están separados**.

Estructura general del backend:

```
src
│
├── controllers
│
├── models
│
├── routes
│
├── config
│
└── index.js
```

---

#  Módulos Implementados

##  Módulo Género

Permite gestionar los géneros de las películas.

Información almacenada:

* Nombre
* Estado (Activo / Inactivo)
* Fecha de creación
* Fecha de actualización
* Descripción

Endpoints principales:

```
GET /api/genero
POST /api/genero
PUT /api/genero/:id
```

---

## Módulo Director

Permite registrar y editar el director principal de una producción.

Información almacenada:

* Nombres
* Estado (Activo / Inactivo)
* Fecha de creación
* Fecha de actualización

Endpoints:

```
GET /api/director
POST /api/director
PUT /api/director/:id
```

---

## Módulo Productora

Permite gestionar las productoras responsables de las producciones.

Información almacenada:

* Nombre
* Estado
* Fecha de creación
* Fecha de actualización
* Slogan
* Descripción

Endpoints:

```
GET /api/productora
POST /api/productora
PUT /api/productora/:id
```

---

## 📺 Módulo Tipo

Permite gestionar los tipos de multimedia (película, serie, etc.).

Información almacenada:

* Nombre
* Fecha de creación
* Fecha de actualización
* Descripción

Endpoints:

```
GET /api/tipo
POST /api/tipo
PUT /api/tipo/:id
```

---

## 🎥 Módulo Media

Este módulo se encarga de gestionar las producciones audiovisuales (películas o series).

Permite realizar:

* Agregar
* Editar
* Eliminar
* Consultar producciones

Información almacenada:

* Serial (único)
* Título
* Sinopsis
* URL de la película
* Imagen o portada
* Fecha de creación
* Fecha de actualización
* Año de estreno
* Género
* Director
* Productora
* Tipo

Endpoints:

```
GET /api/media
POST /api/media
PUT /api/media/:id
DELETE /api/media/:id
```

Este módulo utiliza **relaciones entre colecciones** mediante `ObjectId` y `populate()` de Mongoose.

---

# Base de Datos

La base de datos se encuentra alojada en:

* MongoDB Atlas

Colecciones utilizadas:

* generos
* directores
* productoras
* tipos
* medias

---

# 🚀 Ejemplo de Registro de Película

Ejemplo de petición **POST /api/media**

```json
{
  "serial": "MOV001",
  "titulo": "Avengers Endgame",
  "sinopsis": "Los Avengers enfrentan a Thanos",
  "url": "https://mi-servidor.com/endgame",
  "imagen": "https://mi-servidor.com/endgame.jpg",
  "anioEstreno": 2019,
  "genero": "ID_DEL_GENERO",
  "director": "ID_DEL_DIRECTOR",
  "productora": "ID_DE_PRODUCTORA",
  "tipo": "ID_DEL_TIPO"
}
```

---

# 🧪 Pruebas de la API

Las pruebas del sistema se realizaron utilizando:

* Postman

Se validaron las operaciones **CRUD** para todos los módulos del sistema.

---

#  Estado Actual del Proyecto

✔ Backend completamente funcional
✔ CRUD implementado para todos los módulos
✔ Conexión con base de datos en la nube
✔ Relaciones entre colecciones utilizando Mongoose

Actualmente el sistema se encuentra preparado para integrarse con un **Frontend** que permita visualizar y administrar las películas.

---

# Autores

Proyecto desarrollado como actividad académica para la asignatura **Ingeniería Web II**.

Estudiantes: **Isabela Blandón** **Salomé Molina Reyes** **Angela Alean Acuña**
