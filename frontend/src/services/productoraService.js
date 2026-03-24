import axios from "axios";

const API_URL = "https://cuevaflix-backend.onrender.com/api/productora";
// Obtener productoras
export const getProductoras = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener productoras:", error);
    return [];
  }
};

// Crear productora
export const createProductora = async (productora) => {
  try {
    const response = await axios.post(API_URL, productora);
    return response.data;
  } catch (error) {
    console.error("Error al crear productora:", error);
    throw error;
  }
};

// Actualizar productora
export const updateProductora = async (id, productora) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, productora);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar productora:", error);
    throw error;
  }
};