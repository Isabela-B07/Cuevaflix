import axios from "axios";

const API_URL = "https://cuevaflix-backend.onrender.com/api/media";
export const getMedias = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener medias:", error);
    return [];
  }
};

export const createMedia = async (media) => {
  try {
    const response = await axios.post(API_URL, media);
    return response.data;
  } catch (error) {
    console.error("Error al crear media:", error);
    throw error;
  }
};


export const updateMedia = async (id, media) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, media);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar media:", error);
    throw error;
  }
};


export const deleteMedia = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error al eliminar media:", error);
    throw error;
  }
};