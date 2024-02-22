import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';

function DynamicCarousel() {
  const slides = useSelector(state => state.slides.slides);
  const slideIndex = useSelector(state => state.slides.slideIndex);
  const dispatch = useDispatch();

  console.log('Slides:', slides);
  console.log('Slide Index:', slideIndex);

  const handleSelect = (selectedIndex, e) => {
    dispatch({ type: 'SELECT', payload: selectedIndex });
  };

  if (!slides || slides.length === 0) {
    return <div>No hay diapositivas para mostrar</div>;
  }

  return (
    <div className="carousel-container mb-5 mt-n1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Carousel activeIndex={slideIndex} onSelect={handleSelect}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <img
                style={{ maxWidth: '100%', maxHeight: '35rem', objectFit: 'contain' }}
                src={slide.image}
                alt={slide.title}
              />
            </div>
            <Carousel.Caption>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default DynamicCarousel;
