import { useEffect, useState } from "react";
import { getAlumnos, deleteAlumno } from "../../api/alumnos.api";

export default function AlumnoList({ refresh }) {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const loadAlumnos = async () => {
      const res = await getAlumnos();
      setAlumnos(res.data);
    };

    loadAlumnos();
  }, [refresh]);

  const handleDelete = async (id) => {
    await deleteAlumno(id);
    const res = await getAlumnos();
    setAlumnos(res.data);
  };

  return (
    <div>
      <h3>Lista de Alumnos</h3>
      {alumnos.map((alumno) => (
        <div key={alumno.id}>
          <strong>
            {alumno.nombre} {alumno.apellido}
          </strong>
          <p>{alumno.email}</p>
          <p>Fecha de nacimiento: {alumno.fechaDeNacimiento}</p>
          <button onClick={() => handleDelete(alumno.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}