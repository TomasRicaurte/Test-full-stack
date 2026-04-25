import axios from "axios";

const API_URL = "http://localhost:8080/api/materias";

export const getMaterias = () => axios.get(API_URL);

export const createMateria = (data) =>
  axios.post(API_URL, data);

export const updateMateria = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteMateria = (id) =>
  axios.delete(`${API_URL}/${id}`);