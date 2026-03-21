import { useEffect, useState } from "react";
import { getProductoras, createProductora, updateProductora } from "../services/productoraService";
import Hero from "../components/Hero";
import fondo from "../assets/nebulosa.png";
import "../styles/genero.css"; 

function ProductoraPage() {
  const [productoras, setProductoras] = useState([]);
  const [nombre, setNombre] = useState("");
  const [slogan, setSlogan] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState(true);
  const [editando, setEditando] = useState(false);
  const [idProductora, setIdProductora] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => { cargarProductoras(); }, []);

  const cargarProductoras = async () => {
    const data = await getProductoras();
    setProductoras(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editando) {
        await updateProductora(idProductora, { nombre, slogan, descripcion, estado });
        setSuccess("¡Actualizado con éxito! ✅");
      } else {
        await createProductora({ nombre, slogan, descripcion });
        setSuccess("¡Guardado con éxito! ✅");
      }
      limpiar();
      cargarProductoras();
    } catch (err) {
      setError("Error en la operación ❌");
    }
  };

  const limpiar = () => {
    setNombre(""); setSlogan(""); setDescripcion("");
    setEstado(true); setEditando(false); setIdProductora(null);
  };

  return (
    <div>
      <Hero title="Productoras" subtitle="Administración de productoras" background={fondo} />
      <div className="container mt-5">
        <div className="card-form mb-5">
          <h4 className="text-white mb-3">{editando ? "Editar" : "Nueva"} Productora</h4>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control input-dark" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
              </div>
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control input-dark" placeholder="Slogan" value={slogan} onChange={(e) => setSlogan(e.target.value)} />
              </div>
            </div>
            <div className="row">
              <div className={editando ? "col-md-8 mb-3" : "col-md-12 mb-3"}>
                <textarea className="form-control input-dark" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
              </div>
              {editando && (
                <div className="col-md-4 mb-3">
                  <select className="form-select input-dark" value={estado} onChange={(e) => setEstado(e.target.value === "true")}>
                    <option value="true">Activo</option>
                    <option value="false">Inactivo</option>
                  </select>
                </div>
              )}
            </div>
            <button className={`btn btn-cinematic ${editando ? "btn-warning" : "btn-save"}`}>{editando ? "Actualizar" : "Guardar"}</button>
            {editando && <button type="button" onClick={limpiar} className="btn btn-secondary-cinematic ms-2">Cancelar</button>}
          </form>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          {success && <div className="alert alert-success mt-3">{success}</div>}
        </div>

        <div className="table-container mb-5">
          <div className="table-responsive">
            <table className="table table-dark table-hover align-middle">
              <thead>
                <tr>
                  <th>Estudio</th>
                  <th>Descripción</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productoras.map((p) => (
                  <tr key={p._id}>
                    <td>
                      <div className="text-white fw-bold">{p.nombre}</div>
                      <small className="text-slogan">{p.slogan || "---"}</small>
                    </td>
                    <td className="col-descripcion">{p.descripcion || "Sin descripción"}</td>
                    <td>
                      <span className={`badge ${p.estado ? "bg-success" : "bg-danger"}`}>{p.estado ? "Activo" : "Inactivo"}</span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary" onClick={() => {
                        setNombre(p.nombre); setSlogan(p.slogan || "");
                        setDescripcion(p.descripcion || ""); setEstado(p.estado);
                        setIdProductora(p._id); setEditando(true);
                      }}>Editar</button>
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

export default ProductoraPage;