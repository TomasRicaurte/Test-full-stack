import { useEffect, useState } from "react";
import { getMaterias, deleteMateria } from "../../api/materias.api";
import MateriaForm from "./MateriaForm";

export default function MateriaList() {
  const [materias, setMaterias] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const loadMaterias = async () => {
      const res = await getMaterias();
      setMaterias(res.data);
    };

    loadMaterias();
  }, [refresh]);

  const handleDelete = async (id) => {
    await deleteMateria(id);
    setRefresh(!refresh);
  };

  return (
    <div>
      <MateriaForm onCreated={() => setRefresh(!refresh)} />

      <h3>Lista de Materias</h3>

      {materias.map((m) => (
        <div key={m.id}>
          <strong>{m.nombre}</strong> - {m.codigo} - {m.creditos}

          <button onClick={() => handleDelete(m.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}