import axios from "axios";

const API_URL = "https://cuevaflix-backend.onrender.com/api/director";
// Obtener directores
export const getDirectores = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener directores:", error);
    return [];
  }
};

// Crear director
export const createDirector = async (director) => {
  try {
    const response = await axios.post(API_URL, director);
    return response.data;
  } catch (error) {
    console.error("Error al crear director:", error);
    throw error;
  }
};

// Actualizar director
export const updateDirector = async (id, director) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, director);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar director:", error);
    throw error;
  }
};