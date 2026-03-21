import { useEffect, useState } from "react";
import { getTipos, createTipo, updateTipo } from "../services/tipoService";
import Hero from "../components/Hero";
import fondo from "../assets/nebulosa.png";
import "../styles/genero.css"; 

function TipoPage() {
  const [tipos, setTipos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [editando, setEditando] = useState(false);
  const [idTipo, setIdTipo] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => { cargarTipos(); }, []);

  const cargarTipos = async () => {
    const data = await getTipos();
    setTipos(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editando) {
        await updateTipo(idTipo, { nombre, descripcion });
        setSuccess("Tipo actualizado correctamente ✅");
      } else {
        await createTipo({ nombre, descripcion });
        setSuccess("Tipo guardado correctamente ✅");
      }
      limpiarFormulario();
      cargarTipos();
      setError("");
    } catch (err) {
      setError("No se pudo procesar la solicitud ❌");
    }
  };

  const handleEditar = (tipo) => {
    setNombre(tipo.nombre);
    setDescripcion(tipo.descripcion || "");
    setIdTipo(tipo._id);
    setEditando(true);
    setError("");
    setSuccess("");
  };

  const limpiarFormulario = () => {
    setNombre("");
    setDescripcion("");
    setEditando(false);
    setIdTipo(null);
  };

  return (
    <div>
      <Hero title="Administrar Tipos" subtitle="Películas, Series y más." background={fondo} />
      
      <div className="container mt-5">
        <div className="card-form mb-5">
          <h4 className="text-white mb-3">{editando ? "Editar Tipo" : "Nuevo Tipo"}</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control input-dark" placeholder="Nombre (ej. Serie)" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>
            <div className="mb-3">
              <textarea className="form-control input-dark" placeholder="Descripción opcional" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </div>
            
            <button className={`btn btn-cinematic ${editando ? "btn-warning" : "btn-save"}`}>
              {editando ? "Actualizar" : "Guardar"}
            </button>
            {editando && (
              <button type="button" onClick={limpiarFormulario} className="btn btn-secondary-cinematic ms-2">
                Cancelar
              </button>
            )}
            
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {success && <div className="alert alert-success mt-3">{success}</div>}
          </form>
        </div>

        <div className="table-container mb-5">
          <h4 className="text-white mb-3">Lista de Tipos</h4>
          <div className="table-responsive">
            <table className="table table-dark table-hover align-middle">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Creación</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {tipos.map((tipo) => (
                  <tr key={tipo._id}>
                    <td className="fw-bold">{tipo.nombre}</td>
                    <td className="col-descripcion">{tipo.descripcion || "---"}</td>
                    <td>{new Date(tipo.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary" onClick={() => handleEditar(tipo)}>
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

export default TipoPage;