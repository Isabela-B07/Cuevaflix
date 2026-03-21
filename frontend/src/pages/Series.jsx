import HeroCarousel from "../components/HeroCarousel";
import "../styles/home.css"; 

function Series() {

  const imagenes = [
    "/img/hero6.png",
    "/img/hero7.png",
    "/img/hero8.png",
    "/img/hero9.png",
    "/img/hero10.png",
  ];

  return (
    <div>
      {/* HERO CARRUSEL */}
      <HeroCarousel images={imagenes} />

      {/* POPULARES */}
      <div className="container mt-5">
        <h2 className="text-white mb-4">
          Las series más populares de CuevaFlix
        </h2>

        <div className="scroll-container">
          {[...Array(10)].map((_, i) => (
            <div className="poster-container" key={i}>
              <img src={`/img/${i + 51}.png`} className="poster" />
            </div>
          ))}
        </div>
      </div>

      {/* DRAMA */}
      <div className="container mt-5">
        <h2 className="text-white mb-4">Series de Drama</h2>

        <div className="scroll-container">
          {[...Array(10)].map((_, i) => (
            <div className="poster-container" key={i}>
              <img src={`/img/${i + 61}.png`} className="poster" />
            </div>
          ))}
        </div>
      </div>

      {/* COMEDIA */}
      <div className="container mt-5">
        <h2 className="text-white mb-4">Series de Comedia</h2>

        <div className="scroll-container">
          {[...Array(10)].map((_, i) => (
            <div className="poster-container" key={i}>
              <img src={`/img/${i + 71}.png`} className="poster" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Series;