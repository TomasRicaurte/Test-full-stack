import { useState } from "react";
import { createMateria } from "../../api/materias.api";

export default function MateriaForm({ onCreated }) {
  const [form, setForm] = useState({
    nombre: "",
    codigo: "",
    creditos: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMateria(form);
    setForm({ nombre: "", codigo: "", creditos: "" });
    onCreated?.();
  };

  return (
    <div>
      <h3>Crear Materia</h3>
    <form onSubmit={handleSubmit}>
      

      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
      />

      <input
        name="codigo"
        placeholder="Código"
        value={form.codigo}
        onChange={handleChange}
      />

      <input
        name="creditos"
        type="number"
        placeholder="Créditos"
        value={form.creditos}
        onChange={handleChange}
      />

      <button type="submit">Guardar</button>
    </form>
    </div>
  );
}