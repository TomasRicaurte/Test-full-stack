import AlumnosPage from "./pages/AlumnosPages";
import MateriasPage from "./pages/MateriasPages";
import NotasPage from "./pages/NotasPage";

export default function App() {
  return (
    <div className="container">
      <h1>Gestión Para Las Notas Escolares</h1>

      <div className="section">
        <AlumnosPage />
      </div>

      <div className="section">
        <MateriasPage />
      </div>

      <div className="section">
        <NotasPage />
      </div>
    </div>
  );
}