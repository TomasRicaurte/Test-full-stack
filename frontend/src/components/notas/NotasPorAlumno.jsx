import { useEffect, useState } from "react";
import { getAlumnos } from "../../api/alumnos.api";
import { getNotasByAlumno } from "../../api/notas.api";

export default function NotasPorAlumno({ refresh }) {
  const [alumnos, setAlumnos] = useState([]);
  const [alumnoId, setAlumnoId] = useState("");
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const loadAlumnos = async () => {
      const res = await getAlumnos();
      setAlumnos(res.data);
    };

    loadAlumnos();
  }, []);

  useEffect(() => {
    const loadNotas = async () => {
      if (!alumnoId) {
        setNotas([]);
        return;
      }

      const res = await getNotasByAlumno(alumnoId);
      setNotas(res.data);
    };

    loadNotas();
  }, [alumnoId, refresh]);

  const handleChange = (e) => {
    const id = e.target.value;
    setAlumnoId(id);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Notas por Alumno</h3>

      {/* SELECT DINÁMICO */}
      <select value={alumnoId} onChange={handleChange}>
        <option value="">Seleccionar alumno</option>
        {alumnos.map((a) => (
          <option key={a.id} value={a.id}>
            {a.nombre} {a.apellido}
          </option>
        ))}
      </select>

      <div style={{ marginTop: "10px" }}>
        {notas.length === 0 && alumnoId && (
          <p>No hay notas para este alumno</p>
        )}

        {notas.map((n) => (
          <div key={n.id}>
            {n.materia?.nombre} <br />
            Nota: {n.valor} <br />
            {n.fechaRegistro}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}