import { useEffect, useState } from "react";
import { getNotas, deleteNota } from "../../api/notas.api";
import NotaForm from "./NotaForm";

export default function NotaList({ refresh, onCreated }) {
  const [notas, setNotas] = useState([]);
  const [localRefresh, setLocalRefresh] = useState(false);

  useEffect(() => {
    const loadNotas = async () => {
      const res = await getNotas();
      setNotas(res.data);
    };

    loadNotas();
  }, [refresh, localRefresh]);

  const notifyRefresh = () => {
    if (onCreated) {
      onCreated();
    } else {
      setLocalRefresh((prev) => !prev);
    }
  };

  const handleDelete = async (id) => {
    await deleteNota(id);
    notifyRefresh();
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <NotaForm onCreated={notifyRefresh} />

      <h3>Lista de Notas</h3>

      {notas.map((n) => (
        <div key={n.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px", borderBottom: "1px solid #eee" }}   >
          <p style={{ marginBottom: "5px" }}>
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