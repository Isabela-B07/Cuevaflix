import { useEffect, useState } from "react";
import { getGeneros, createGenero, updateGenero } from "../services/generoService";
import Hero from "../components/Hero";
import fondo from "../assets/nebulosa.png";
import "../styles/genero.css";

function GeneroPage() {
  const [generos, setGeneros] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState(true); 
  const [editando, setEditando] = useState(false);
  const [idGenero, setIdGenero] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => { cargarGeneros(); }, []);

  const cargarGeneros = async () => {
    try {
      const data = await getGeneros();
      setGeneros(data);
    } catch (err) {
      setError("Error al cargar los géneros ❌");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editando) {
        await updateGenero(idGenero, { nombre, descripcion, estado });
        setSuccess("Género actualizado correctamente ✅");
      } else {
        await createGenero({ nombre, descripcion });
        setSuccess("Género guardado correctamente ✅");
      }
      limpiarFormulario();
      cargarGeneros();
      setError("");
      setTimeout(() => setSuccess(""), 3000);
    } catch (error) {
      setError(error.response?.data?.message || "Error en la operación ❌");
    }
  };

  const handleEditar = (genero) => {
    setNombre(genero.nombre);
    setDescripcion(genero.descripcion);
    setEstado(genero.estado);
    setIdGenero(genero._id);
    setEditando(true);
    setError("");
    setSuccess("");
  };

  const limpiarFormulario = () => {
    setNombre("");
    setDescripcion("");
    setEstado(true);
    setEditando(false);
    setIdGenero(null);
  };

  return (
    <div>
      <Hero 
        title="Administrar Géneros" 
        subtitle="Gestiona los géneros de la plataforma." 
        background={fondo} 
      />

      <div className="container mt-5">

        {/* FORMULARIO */}
        <div className="card-form mb-5">
          <h4 className="text-white mb-3">{editando ? "Editar Género" : "Nuevo Género"}</h4>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input 
                  type="text" 
                  className="form-control input-dark" 
                  placeholder="Nombre" 
                  value={nombre} 
                  onChange={(e) => setNombre(e.target.value)} 
                  required 
                />
              </div>
              {editando && (
                <div className="col-md-6 mb-3">
                  <select 
                    className="form-select input-dark" 
                    value={estado} 
                    onChange={(e) => setEstado(e.target.value === "true")}
                  >
                    <option value="true">Activo</option>
                    <option value="false">Inactivo</option>
                  </select>
                </div>
              )}
            </div>

            <textarea 
              className="form-control input-dark mb-3" 
              placeholder="Descripción" 
              value={descripcion} 
              onChange={(e) => setDescripcion(e.target.value)} 
              rows={3}
            />

            <button className={`btn btn-cinematic ${editando ? "btn-warning" : "btn-save"}`}>
              {editando ? "Actualizar" : "Guardar"}
            </button>
            {editando && (
              <button 
                type="button" 
                className="btn btn-secondary-cinematic ms-2" 
                onClick={limpiarFormulario}
              >
                Cancelar
              </button>
            )}
          </form>

          {error && <div className="alert alert-danger mt-3">{error}</div>}
          {success && <div className="alert alert-success mt-3">{success}</div>}
        </div>

        {/* TABLA DE GÉNEROS */}
        <div className="table-container mb-5">
          <h4 className="text-white mb-3">Lista de Géneros</h4>
          <div className="table-responsive">
            <table className="table table-dark table-hover align-middle">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {generos.map((g) => (
                  <tr key={g._id}>
                    <td className="fw-bold">{g.nombre}</td>
                    <td className="col-descripcion">
                      <span data-full={g.descripcion || "Sin descripción"}>
                        {g.descripcion || "Sin descripción"}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${g.estado ? "bg-success" : "bg-danger"}`}>
                        {g.estado ? "Activo" : "Inactivo"}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="btn btn-sm btn-outline-primary" 
                        onClick={() => handleEditar(g)}
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default GeneroPage;