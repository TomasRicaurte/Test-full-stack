import { useEffect, useState } from "react";
import { getNotas, deleteNota } from "../../api/notas.api";
import NotaForm from "./NotaForm";

export default function NotaList() {
  const [notas, setNotas] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const loadNotas = async () => {
      const res = await getNotas();
      setNotas(res.data);
    };

    loadNotas();
  }, [refresh]);

  const handleDelete = async (id) => {
    await deleteNota(id);
    setRefresh(!refresh);
  };

  return (
    <div>
      <NotaForm onCreated={() => setRefresh(!refresh)} />

      <h3>Lista de Notas</h3>

      {notas.map((n) => (
        <div key={n.id}>
          <p>
            {n.alumno?.nombre} {n.alumno?.apellido} <br />
            {n.materia?.nombre} <br />
            Nota: {n.valor} <br />
            {n.fechaRegistro}
          </p>

          <button onClick={() => handleDelete(n.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}