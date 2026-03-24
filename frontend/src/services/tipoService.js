import axios from "axios";

const API_URL = "https://cuevaflix-backend.onrender.com/api/tipo";
// Obtener tipos
export const getTipos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener tipos:", error);
    return [];
  }
};

// Crear tipo
export const createTipo = async (tipo) => {
  try {
    const response = await axios.post(API_URL, tipo);
    return response.data;
  } catch (error) {
    console.error("Error al crear tipo:", error);
    throw error;
  }
};

// Actualizar tipo
export const updateTipo = async (id, tipo) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, tipo);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar tipo:", error);
    throw error;
  }
};