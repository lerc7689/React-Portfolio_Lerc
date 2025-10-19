import "./Carousel.css";
import { useRef, useEffect, useState } from "react";

const Carousel = ({ projects }) => {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const speed = 0.5; // velocidad px/frame
  const pauseTime = 2000;
  const duplicatedProjects = [...projects, ...projects];

  const normalizeOffset = (value: number, totalWidth: number) => {
    if (value <= -totalWidth) return 0;
    if (value >= 0) return -totalWidth;
    return value;
  };

  // Animación automática
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2;

    const animate = () => {
      if (!isPaused) {
        setOffset((prev) => normalizeOffset(prev - speed, totalWidth));
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current!);
  }, [isPaused]);

  // Movimiento con botones
  const handleMove = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2;
    setIsPaused(true);
    const distance = dir === "left" ? 500 : -500;
    setOffset((prev) => normalizeOffset(prev + distance, totalWidth));

    clearTimeout(window.resumeTimeout);
    // @ts-ignore
    window.resumeTimeout = setTimeout(() => setIsPaused(false), pauseTime);
  };

  // ---- 🖱️ Lógica de arrastre manual ----
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startOffset = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    setIsPaused(true);
    startX.current = e.clientX;
    startOffset.current = offset;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const totalWidth = trackRef.current.scrollWidth / 2;
    const dx = e.clientX - startX.current;
    setOffset(normalizeOffset(startOffset.current + dx, totalWidth));
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setIsPaused(false);
  };

  // Soporte táctil (móvil)
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    setIsPaused(true);
    startX.current = e.touches[0].clientX;
    startOffset.current = offset;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const totalWidth = trackRef.current.scrollWidth / 2;
    const dx = e.touches[0].clientX - startX.current;
    setOffset(normalizeOffset(startOffset.current + dx, totalWidth));
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    setIsPaused(false);
  };

  return (
    <div className="carouselContainer">
      <button className="carouselBtn left" onClick={() => handleMove("left")}>
        <i className="fa-solid fa-angle-left"></i>
      </button>

      <div
        className="carouselViewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carouselTrack"
          ref={trackRef}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {duplicatedProjects.map((proj, index) => (
            <div key={index} className="carouselItem">
              <img src={proj.img} alt={proj.name} />
              <div className="carouselOverlay">
                <a href={proj.github} target="_blank" rel="noreferrer">
                  <p>
                    <i className="fa-brands fa-github"></i>
                  </p>
                </a>
                <a href={proj.demo} target="_blank" rel="noreferrer">
                  <p>Demo</p>
                </a>
                <h4 className="carouselOverlay-tech">{proj.tech}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="carouselBtn right" onClick={() => handleMove("right")}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default Carousel;
