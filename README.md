# 🎬 Aplicación Web de Gestión de Películas

## Ingeniería Web II

---

## 📌 Descripción del Proyecto

Este proyecto consiste en el desarrollo de una **Aplicación Web para la gestión de películas y series**, orientada al rol de **Administrador**, permitiendo registrar y administrar producciones audiovisuales.

La aplicación simula una plataforma tipo streaming (similar a Cuevana, pero sin contenido ilegal), donde se pueden gestionar y visualizar diferentes producciones.

Actualmente el sistema cuenta con:

* 🔧 **Backend (API REST)** para la gestión de datos
* 💻 **Frontend interactivo** para el usuario
* ☁️ Base de datos en la nube usando MongoDB Atlas

---

## 🛠 Tecnologías Utilizadas

### 🔙 Backend

* Node.js
* Express.js
* MongoDB
* MongoDB Atlas
* Mongoose

### 🎨 Frontend

* React (Vite)
* JavaScript
* HTML5
* CSS
* Bootstrap (framework de estilos para diseño responsivo)

### 🧪 Herramientas

* Postman
* Git & GitHub

---

## 🏗 Arquitectura

La aplicación sigue una arquitectura **monolítica con separación lógica entre frontend y backend**.

Estructura del proyecto:

```
/backend
   src
   ├── controllers
   ├── models
   ├── routes
   ├── config
   └── index.js

/frontend
   src
   ├── components
   ├── pages
   ├── services
   └── App.jsx
```

---

## ⚙️ Funcionalidades del Sistema

El sistema permite administrar:

* Géneros
* Directores
* Productoras
* Tipos de multimedia
* Producciones (películas y series)

Además, el frontend permite:

* Visualizar producciones
* Registrar nuevos elementos
* Editar información
* Interactuar con la API en tiempo real mediante servicios

---

## 🔗 Endpoints Principales (Backend)

### 🎭 Género

```
GET /api/genero
POST /api/genero
PUT /api/genero/:id
```

### 🎬 Director

```
GET /api/director
POST /api/director
PUT /api/director/:id
```

### 🏢 Productora

```
GET /api/productora
POST /api/productora
PUT /api/productora/:id
```

### 📺 Tipo

```
GET /api/tipo
POST /api/tipo
PUT /api/tipo/:id
```

### 🎥 Media

```
GET /api/media
POST /api/media
PUT /api/media/:id
DELETE /api/media/:id
```

---

## 🗄 Base de Datos

La base de datos está alojada en **MongoDB Atlas**.

Colecciones utilizadas:

* generos
* directores
* productoras
* tipos
* medias

---

## 🚀 Ejecución del Proyecto

### 🔙 Backend

```bash
cd backend
npm install
npm run dev
```

### 🎨 Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Pruebas

Las pruebas del backend se realizaron con:

* Postman

Se validaron todas las operaciones **CRUD** del sistema.

---

## 📊 Estado del Proyecto

✔ Backend completamente funcional
✔ API REST implementada
✔ Base de datos en la nube
✔ Frontend funcional con interfaz gráfica
✔ Consumo de API mediante servicios
✔ Integración completa frontend-backend

---

## 👩‍💻 Autores

Proyecto desarrollado como actividad académica para la asignatura **Ingeniería Web II**.

* Isabela Blandón
* Salomé Molina Reyes
* Angela Alean Acuña
