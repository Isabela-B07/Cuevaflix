import { useEffect, useState } from "react";
import { getMedias, createMedia, updateMedia, deleteMedia } from "../services/mediaService";
import { getGeneros } from "../services/generoService";
import { getDirectores } from "../services/directorService";
import { getProductoras } from "../services/productoraService";
import { getTipos } from "../services/tipoService";
import Hero from "../components/Hero";
import fondo from "../assets/nebulosa.png";
import "../styles/genero.css";

function MediaPage() {
  const [medias, setMedias] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [directores, setDirectores] = useState([]);
  const [productoras, setProductoras] = useState([]);
  const [tipos, setTipos] = useState([]);

  const [formData, setFormData] = useState({
    serial: "", titulo: "", sinopsis: "", url: "", imagen: "",
    anioEstreno: "", genero: "", director: "", productora: "", tipo: ""
  });

  const [editando, setEditando] = useState(false);
  const [idMedia, setIdMedia] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Overlay flotante
  const [overlay, setOverlay] = useState({ visible: false, x: 0, y: 0, texto: "" });

  useEffect(() => { cargarDatos(); }, []);

  const cargarDatos = async () => {
    try {
      const [m, g, d, p, t] = await Promise.all([
        getMedias(), getGeneros(), getDirectores(), getProductoras(), getTipos()
      ]);
      setMedias(m); setGeneros(g); setDirectores(d); setProductoras(p); setTipos(t);
    } catch (err) {
      setError("Error al cargar los datos ❌");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editando) {
        await updateMedia(idMedia, formData);
        setSuccess("Producción actualizada correctamente 🎬");
      } else {
        await createMedia(formData);
        setSuccess("Media creada correctamente 🎬");
      }
      limpiarFormulario();
      cargarDatos();
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err.response?.data?.msg || "Error en la operación ❌");
    }
  };

  const handleEditar = (m) => {
    setFormData({
      serial: m.serial, titulo: m.titulo, sinopsis: m.sinopsis || "",
      url: m.url, imagen: m.imagen || "", anioEstreno: m.anioEstreno,
      genero: m.genero?._id || "", director: m.director?._id || "",
      productora: m.productora?._id || "", tipo: m.tipo?._id || ""
    });
    setIdMedia(m._id);
    setEditando(true);
  };

  const handleEliminar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar esta media?")) return;
    try {
      await deleteMedia(id);
      setSuccess("Eliminado correctamente 🗑️");
      cargarDatos();
    } catch (err) {
      setError("Error al eliminar ❌");
    }
  };

  const limpiarFormulario = () => {
    setFormData({
      serial: "", titulo: "", sinopsis: "", url: "", imagen: "",
      anioEstreno: "", genero: "", director: "", productora: "", tipo: ""
    });
    setEditando(false); setIdMedia(null);
  };

  // Funciones overlay emergente
  const mostrarEmergente = (e, texto) => {
    const rect = e.target.getBoundingClientRect();
    setOverlay({
      visible: true,
      x: rect.left,
      y: rect.top - 10,
      texto,
    });
  };

  const ocultarEmergente = () => {
    setOverlay({ ...overlay, visible: false });
  };

  return (
    <div>
      <Hero title="Administrar Media" subtitle="Panel de administración donde se manejan las películas y series" background={fondo} />
      <div className="container mt-5">
        <div className="card-form mb-5">
          <h4 className="text-white mb-3">{editando ? "Editar" : "Nueva"} Media</h4>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-3 mb-3">
                <input name="serial" className="form-control input-dark" placeholder="Serial" value={formData.serial} onChange={handleChange} required disabled={editando}/>
              </div>
              <div className="col-md-6 mb-3">
                <input name="titulo" className="form-control input-dark" placeholder="Título" value={formData.titulo} onChange={handleChange} required />
              </div>
              <div className="col-md-3 mb-3">
                <input name="anioEstreno" type="number" className="form-control input-dark" placeholder="Año" value={formData.anioEstreno} onChange={handleChange} required />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input name="url" className="form-control input-dark" placeholder="URL Película" value={formData.url} onChange={handleChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <input name="imagen" className="form-control input-dark" placeholder="URL Portada" value={formData.imagen} onChange={handleChange} />
              </div>
            </div>

            <div className="mb-3">
              <textarea name="sinopsis" className="form-control input-dark" placeholder="Sinopsis" rows="2" value={formData.sinopsis} onChange={handleChange} />
            </div>

            <div className="row">
              <div className="col-md-3 mb-3">
                <select name="genero" className="form-select input-dark" value={formData.genero} onChange={handleChange} required>
                  <option value="">Género</option>
                  {generos.filter(g => g.estado).map(g => <option key={g._id} value={g._id}>{g.nombre}</option>)}
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <select name="director" className="form-select input-dark" value={formData.director} onChange={handleChange} required>
                  <option value="">Director</option>
                  {directores.filter(d => d.estado).map(d => <option key={d._id} value={d._id}>{d.nombres}</option>)}
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <select name="productora" className="form-select input-dark" value={formData.productora} onChange={handleChange} required>
                  <option value="">Productora</option>
                  {productoras.filter(p => p.estado).map(p => <option key={p._id} value={p._id}>{p.nombre}</option>)}
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <select name="tipo" className="form-select input-dark" value={formData.tipo} onChange={handleChange} required>
                  <option value="">Tipo</option>
                  {tipos.map(t => <option key={t._id} value={t._id}>{t.nombre}</option>)}
                </select>
              </div>
            </div>

            <button className={`btn btn-cinematic ${editando ? 'btn-warning' : 'btn-save'}`}>
              {editando ? 'Actualizar' : 'Guardar'}
            </button>
            {editando && <button type="button" onClick={limpiarFormulario} className="btn btn-secondary-cinematic ms-2">Cancelar</button>}
          </form>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          {success && <div className="alert alert-success mt-3">{success}</div>}
        </div>

        <div className="table-container mb-5">
          <div className="table-responsive">
            <table className="table table-dark table-hover align-middle">
              <thead>
                <tr>
                  <th>Portada</th>
                  <th>Título / Serial</th>
                  <th>Sinopsis</th>
                  <th>Año</th>
                  <th>Género</th>
                  <th>Director</th>
                  <th>Productora</th>
                  <th>Tipo</th>
                  <th>Creación</th>
                  <th>Actualización</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {medias.map((m) => (
                  <tr key={m._id}>
                    <td>
                      <img 
                        src={m.imagen} 
                        alt="poster" 
                        style={{width: '50px', borderRadius: '4px'}} 
                        onError={(e) => { e.target.src='https://via.placeholder.com/50x75?text=No+Img'; }} 
                      />
                    </td>
                    <td>
                      <div className="fw-bold">{m.titulo}</div>
                      <small className="text-muted">{m.serial}</small>
                    </td>
                    <td className="col-descripcion">
                      <div
                        className="descripcion-texto"
                        onMouseEnter={(e) => mostrarEmergente(e, m.sinopsis || "Sin sinopsis")}
                        onMouseLeave={ocultarEmergente}
                      >
                        {m.sinopsis || "Sin sinopsis"}
                      </div>
                    </td>
                    <td>{m.anioEstreno}</td>
                    <td>{m.genero?.nombre}</td>
                    <td>{m.director?.nombres}</td>
                    <td>{m.productora?.nombre}</td>
                    <td>{m.tipo?.nombre}</td>
                    <td>{new Date(m.createdAt).toLocaleDateString()}</td>
                    <td>{new Date(m.updatedAt).toLocaleDateString()}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEditar(m)}>Editar</button>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => handleEliminar(m._id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Overlay flotante */}
      {overlay.visible && (
        <div
          className="descripcion-overlay"
          style={{ left: overlay.x, top: overlay.y }}
        >
          {overlay.texto}
        </div>
      )}
    </div>
  );
}

export default MediaPage;