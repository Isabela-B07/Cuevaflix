import "../styles/heroCarousel.css";
function HeroCarousel({ images }) {
  return (
    <div
      id="heroCarousel"
      className="carousel slide hero-carousel"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img src={img} className="d-block w-100 hero-img" />
          </div>
        ))}
      </div>
      {/* CONTROLES */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
export default HeroCarousel;