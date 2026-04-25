import { useState } from "react";
import NotaList from "../components/notas/NotaList";
import NotasPorAlumno from "../components/notas/NotasPorAlumno";

export default function NotasPage() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => setRefresh((prev) => !prev);

  return (
    <div>
      <h2>Gestión de Notas</h2>

      <NotaList refresh={refresh} onCreated={handleRefresh} />

      <hr />

      <NotasPorAlumno refresh={refresh} />
    </div>
  );
}