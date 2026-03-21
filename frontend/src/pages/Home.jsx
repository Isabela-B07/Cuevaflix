import Hero from "../components/Hero";
import collage from "../assets/collage.png";
import "../styles/home.css";
function Home() {
  return (
    <div>
      <Hero
        title="Películas y series ilimitadas y mucho más"
        subtitle="Tu plataforma de entretenimiento para disfrutar películas y series online, gratis y sin complicaciones."
        background={collage}
      />
      {/* TENDENCIAS */}
      <div className="container mt-5">
        <h2 className="text-white mb-4">Tendencias</h2>
        <div className="scroll-container">
          {[...Array(10)].map((_, i) => (
            <div className="poster-container" key={i}>
              <span className="poster-number">{i + 1}</span>
              <img src={`/img/${i + 1}.png`} className="poster" />
            </div>
          ))}
        </div>
      </div>
      {/* THRILLER */}
      <div className="container mt-5">
        <h2 className="text-white mb-4">Thriller</h2>
        <div className="scroll-container">
          {[...Array(10)].map((_, i) => (
            <div className="poster-container" key={i}>
              <img src={`/img/${i + 11}.png`} className="poster" />
            </div>
          ))}
        </div>
      </div>
      {/* ACCIÓN */}
      <div className="container mt-5">
        <h2 className="text-white mb-4">Acción</h2>
        <div className="scroll-container">
          {[...Array(10)].map((_, i) => (
            <div className="poster-container" key={i}>
              <img src={`/img/${i + 21}.png`} className="poster" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;