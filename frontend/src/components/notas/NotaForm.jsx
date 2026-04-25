import { useEffect, useState } from "react";
import { createNota } from "../../api/notas.api";
import { getAlumnos } from "../../api/alumnos.api";
import { getMaterias } from "../../api/materias.api";

export default function NotaForm({ onCreated }) {
  const [alumnos, setAlumnos] = useState([]);
  const [materias, setMaterias] = useState([]);

  const [form, setForm] = useState({
    alumnoId: "",
    materiaId: "",
    valor: ""
  });

  useEffect(() => {
    const loadData = async () => {
      const alumnosRes = await getAlumnos();
      const materiasRes = await getMaterias();

      setAlumnos(alumnosRes.data);
      setMaterias(materiasRes.data);
    };

    loadData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createNota({
      alumno: { id: form.alumnoId },
      materia: { id: form.materiaId },
      valor: form.valor
    });

    setForm({ alumnoId: "", materiaId: "", valor: "" });
    onCreated?.();
  };

  return (
    <div>
        <h3>Crear Nota</h3>
    <form onSubmit={handleSubmit}>

      {/* ALUMNO SELECT */}
      <select
        name="alumnoId"
        value={form.alumnoId}
        onChange={handleChange}
      >
        <option value="">Seleccionar Alumno</option>
        {alumnos.map((a) => (
          <option key={a.id} value={a.id}>
            {a.nombre} {a.apellido}
          </option>
        ))}
      </select>

      {/* MATERIA SELECT */}
      <select
        name="materiaId"
        value={form.materiaId}
        onChange={handleChange}
      >
        <option value="">Seleccionar Materia</option>
        {materias.map((m) => (
          <option key={m.id} value={m.id}>
            {m.nombre}
          </option>
        ))}
      </select>

      {/* NOTA */}
      <input
        name="valor"
        type="number"
        step="0.1"
        placeholder="Nota"
        value={form.valor}
        onChange={handleChange}
      />

      <button type="submit">Guardar Nota</button>
    </form>
    </div>
  );
}