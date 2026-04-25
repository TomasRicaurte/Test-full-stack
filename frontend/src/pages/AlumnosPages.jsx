import { useState } from "react";
import AlumnoForm from "../components/alumnos/AlumnoForm";
import AlumnoList from "../components/alumnos/AlumnoList";

export default function AlumnosPage() {
  const [refresh, setRefresh] = useState(false);

  const reload = () => setRefresh(!refresh);

  return (
    <div>
      <h2>Gestión de Alumnos</h2>

      {/* FORMULARIO SIEMPRE ARRIBA */}
      <AlumnoForm onCreated={reload} />

      {/* LISTA ABAJO */}
      <AlumnoList refresh={refresh} />
    </div>
  );
}