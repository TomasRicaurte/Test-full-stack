import api from "./client";

const API = "http://localhost:8080/api/notas";

export const getNotas = () => api.get(API);
export const createNota = (data) => api.post(API, data);
export const deleteNota = (id) => api.delete(`${API}/${id}`);
export const getNotasByAlumno = (alumnoId) =>
  api.get(`${API}/alumno/${alumnoId}`);