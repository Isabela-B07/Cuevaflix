import { useEffect, useState } from "react";
import { getDirectores, createDirector, updateDirector } from "../services/directorService";
import Hero from "../components/Hero";
import fondo from "../assets/nebulosa.png";
import "../styles/genero.css"; 

function DirectorPage() {
  const [directores, setDirectores] = useState([]);
  const [nombres, setNombres] = useState("");
  const [estado, setEstado] = useState(true);
  const [editando, setEditando] = useState(false);
  const [idDirector, setIdDirector] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => { cargarDirectores(); }, []);

  const cargarDirectores = async () => {
    const data = await getDirectores();
    setDirectores(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editando) {
        await updateDirector(idDirector, { nombres, estado });
        setSuccess("Director actualizado correctamente ✅");
      } else {
        await createDirector({ nombres });
        setSuccess("Director guardado correctamente ✅");
      }
      limpiar();
      cargarDirectores();
      setError("");
    } catch (err) {
      setError("No se pudo procesar la solicitud ❌");
      setSuccess("");
    }
  };

  const limpiar = () => {
    setNombres("");
    setEstado(true);
    setEditando(false);
    setIdDirector(null);
  };

  return (
    <div>
      <Hero title="Administrar Directores" subtitle="Gestión de directores de cine." background={fondo} />
      <div className="container mt-5">
        <div className="card-form mb-5">
          <h4 className="text-white mb-3">{editando ? "Editar Director" : "Nuevo Director"}</h4>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className={editando ? "col-md-8 mb-3" : "col-md-12 mb-3"}>
                <input 
                  type="text" 
                  className="form-control input-dark" 
                  placeholder="Nombres" 
                  value={nombres} 
                  onChange={(e) => {
                    setNombres(e.target.value);
                    setError("");
                    setSuccess(""); 
                  }} 
                  required 
                />
              </div>
              {editando && (
                <div className="col-md-4 mb-3">
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
            
            <button className={`btn btn-cinematic ${editando ? "btn-warning" : "btn-save"}`}>
              {editando ? "Actualizar" : "Guardar"}
            </button>
            {editando && (
              <button type="button" onClick={limpiar} className="btn btn-secondary-cinematic ms-2">
                Cancelar
              </button>
            )}

            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {success && <div className="alert alert-success mt-3">{success}</div>}
          </form>
        </div>

        <div className="table-container mb-5">
          <h4 className="text-white mb-3">Lista de Directores</h4>
          <div className="table-responsive">
            <table className="table table-dark table-hover align-middle">
              <thead>
                <tr>
                  <th>Nombres</th>
                  <th>Estado</th>
                  <th>Creación</th>
                  <th>Actualización</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {directores.map((d) => (
                  <tr key={d._id}>
                    <td className="fw-bold">{d.nombres}</td>
                    <td>
                      <span className={`badge ${d.estado ? "bg-success" : "bg-danger"}`}>
                        {d.estado ? "Activo" : "Inactivo"}
                      </span>
                    </td>
                    <td>{new Date(d.createdAt).toLocaleDateString()}</td>
                    <td>{new Date(d.updatedAt).toLocaleDateString()}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary" onClick={() => {
                        setNombres(d.nombres);
                        setEstado(d.estado);
                        setIdDirector(d._id);
                        setEditando(true);
                        setError("");
                        setSuccess("");
                      }}>
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

export default DirectorPage;