import "../styles/hero.css";
function Hero({ title, subtitle, background }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero-overlay">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
export default Hero;