'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Carrosel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!carouselRef.current) return;
    const totalSlides = carouselRef.current.children.length;

    const updateCarousel = () => {
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
      }
    };

    updateCarousel();

    const handleNext = () => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const handlePrev = () => {
      setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    nextButton?.addEventListener('click', handleNext);
    prevButton?.addEventListener('click', handlePrev);

    return () => {
      nextButton?.removeEventListener('click', handleNext);
      prevButton?.removeEventListener('click', handlePrev);
    };
  }, [index]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden relative w-full h-64"> {/* Ajuste na altura */}
        <div ref={carouselRef} id="carousel" className="flex transition-transform duration-700 ease-in-out h-full ">
          <div className="w-full flex-shrink-0 relative h-full">
            <Image
              src='/image1.png'
              layout='fill'
              className="object-cover"  // Certifique-se de que a imagem preenche o contêiner
              alt="Slide 1"
            />
          </div>
          <div className="w-full flex-shrink-0 relative h-full">
            <Image
              src='/image2.png'
              layout='fill'
              className="object-cover"
              alt="Slide 2"
            />
          </div>
          <div className="w-full flex-shrink-0 relative h-full">
            <Image
              src='/image3.png'
              layout='fill'
              className="object-cover"
              alt="Slide 3"
            />
          </div>
        </div>
      </div>

      <button id="prev" className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
        &#10094;
      </button>
      <button id="next" className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
        &#10095;
      </button>
    </div>
  );
};

export default Carrosel;
