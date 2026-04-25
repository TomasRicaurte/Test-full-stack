import axios from "axios";

const API = "http://localhost:8080/api/alumnos";

export const getAlumnos = () => axios.get(API);

export const createAlumno = (data) =>
  axios.post(API, data);

export const updateAlumno = (id, data) =>
  axios.put(`${API}/${id}`, data);

export const deleteAlumno = (id) =>
  axios.delete(`http://localhost:8080/api/alumnos/${id}`);