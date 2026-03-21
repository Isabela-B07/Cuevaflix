import HeroCarousel from "../components/HeroCarousel";
import "../styles/home.css"; 

function Peliculas() {

  const imagenes = [
    "/img/hero1.png",
    "/img/hero2.png",
    "/img/hero3.png",
    "/img/hero4.png",
    "/img/hero5.png",
  ];

  return (
    <div>
      {/* HERO CARRUSEL */}
      <HeroCarousel images={imagenes} />

      {/* POPULARES */}
      <div className="container mt-5">
        <h2 className="text-white mb-4">
          Las películas más populares de CuevaFlix
        </h2>

        <div className="scroll-container">
          {[...Array(10)].map((_, i) => (
            <div className="poster-container" key={i}>
              <img src={`/img/${i + 1}.png`} className="poster" />
            </div>
          ))}
        </div>
      </div>

      {/* DRAMA */}
      <div className="container mt-5">
        <h2 className="text-white mb-4">Películas de Drama</h2>

        <div className="scroll-container">
          {[...Array(10)].map((_, i) => (
            <div className="poster-container" key={i}>
              <img src={`/img/${i + 31}.png`} className="poster" />
            </div>
          ))}
        </div>
      </div>

      {/* COMEDIA */}
      <div className="container mt-5">
        <h2 className="text-white mb-4">Películas de Comedia</h2>

        <div className="scroll-container">
          {[...Array(10)].map((_, i) => (
            <div className="poster-container" key={i}>
              <img src={`/img/${i + 41}.png`} className="poster" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Peliculas;