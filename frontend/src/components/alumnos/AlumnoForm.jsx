import { useState } from "react";
import api from "../../api/client";

export default function AlumnoForm({ onCreated }) {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    fechaDeNacimiento: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/alumnos", form);

      alert("Alumno creado correctamente");

      setForm({
        nombre: "",
        apellido: "",
        email: "",
        fechaDeNacimiento: "",
      });

      // recargar lista
      onCreated?.();
    } catch (error) {
      console.error(error);
      alert("Error creando alumno");
    }
  };

  return (
    <div>
      <h3>Crear Alumno</h3>

      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <br />

        <input
          name="apellido"
          placeholder="Apellido"
          value={form.apellido}
          onChange={handleChange}
        />
        <br />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <br />

        <input
          type="date"
          name="fechaDeNacimiento"
          value={form.fechaDeNacimiento}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}