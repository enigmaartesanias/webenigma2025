import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarruselAlternativo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar 3 en escritorio
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Mostrar 1 en pantallas menores a 768px
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          draggable: false, // Intenta deshabilitar el arrastre en móvil
          swipe: false,     // Intenta deshabilitar el deslizamiento táctil en móvil
          dots: true
        }
      }
    ]
  };
  return (
    <div className="w-full py-10 bg-gray-100" style={{ overscrollBehavior: 'contain', touchAction: 'pan-y' }}>
    <div className="w-full py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Descubre más de nuestra colección
        </h2>
        <Slider {...settings}>
          <div>
            <img src="/images/img1.jpg" alt="Producto 1" className="w-full h-48 object-cover rounded-lg" />
            <p className="mt-2 text-gray-700 text-center">Descripción del producto 1</p>
          </div>
          <div>
            <img src="/images/img2.jpg" alt="Producto 2" className="w-full h-48 object-cover rounded-lg" />
            <p className="mt-2 text-gray-700 text-center">Descripción del producto 2</p>
          </div>
          <div>
            <img src="/images/img3.jpg" alt="Producto 3" className="w-full h-48 object-cover rounded-lg" />
            <p className="mt-2 text-gray-700 text-center">Descripción del producto 3</p>
          </div>
          {/* Añade más slides aquí */}
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default CarruselAlternativo;