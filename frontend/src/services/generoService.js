import axios from "axios";

const API_URL = "http://localhost:4000/api/genero";

// Obtener todos los géneros
export const getGeneros = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener géneros:", error);
    return [];
  }
};

// Crear género
export const createGenero = async (genero) => {
  try {
    const response = await axios.post(API_URL, genero);
    return response.data;
  } catch (error) {
    console.error("Error al crear género:", error);
    throw error;
  }
};

// Actualizar género
export const updateGenero = async (id, genero) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, genero);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar género:", error);
    throw error;
  }
};