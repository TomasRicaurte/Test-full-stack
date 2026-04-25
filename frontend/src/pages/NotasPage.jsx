import NotaList from "../components/notas/NotaList";
import NotasPorAlumno from "../components/notas/NotasPorAlumno";

export default function NotasPage() {
  return (
    <div>
      <h2>Gestión de Notas</h2>

      <NotaList />

      <hr />

      <NotasPorAlumno />
    </div>
  );
}