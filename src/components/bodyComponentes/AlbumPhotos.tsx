'use client';

import React, { useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Ícones

const photos = [
  { id: 1, src: '/resultados/2.png', alt: 'Foto 1', description: 'Antes e depois incrível de tratamento facial' },
  { id: 2, src: '/resultados/3.png', alt: 'Foto 2', description: 'Redução visível de linhas de expressão' },
  { id: 3, src: '/resultados/4.png', alt: 'Foto 3', description: 'Melhora no aspecto da pele com poucos dias' },
  { id: 4, src: '/resultados/5.png', alt: 'Foto 4', description: 'Transformação no contorno facial' },
  { id: 5, src: '/resultados/6.png', alt: 'Foto 5', description: 'Resultado após limpeza de pele profunda' },
  { id: 6, src: '/resultados/7.png', alt: 'Foto 6', description: 'Efeito lifting sem cirurgia' },
  { id: 7, src: '/resultados/8.png', alt: 'Foto 7', description: 'Pele mais uniforme e hidratada' },
  { id: 8, src: '/resultados/9.png', alt: 'Foto 8', description: 'Diminuição de manchas e marcas' },
  { id: 9, src: '/resultados/10.png', alt: 'Foto 9', description: 'Melhora na firmeza da pele' },
  { id: 10, src: '/resultados/11.png', alt: 'Foto 10', description: 'Resultado de sessão de bioestimulador' },
  { id: 11, src: '/resultados/12.png', alt: 'Foto 11', description: 'Rejuvenescimento facial completo' },
  { id: 12, src: '/resultados/13.png', alt: 'Foto 12', description: 'Melhora progressiva após tratamento contínuo' },
  { id: 13, src: '/resultados/14.png', alt: 'Foto 13', description: 'Efeito de clareamento de olheiras' },
  { id: 14, src: '/resultados/15.png', alt: 'Foto 14', description: 'Redução de poros visíveis e textura' },
  { id: 15, src: '/resultados/16.png', alt: 'Foto 15', description: 'Resultado após aplicação de ácido' },
  { id: 16, src: '/resultados/17.png', alt: 'Foto 16', description: 'Transformação de pele com microagulhamento' },
  { id: 17, src: '/resultados/18.png', alt: 'Foto 17', description: 'Pele mais saudável e revitalizada' },
  { id: 18, src: '/resultados/19.png', alt: 'Foto 18', description: 'Antes e depois com tratamento personalizado' },
];


const PhotoAlbum = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 25 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 30 },
      },
    },
  });

  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!slider.current) return;

    const autoplay = () => {
      timeout.current = setTimeout(() => {
        slider.current?.next();
        autoplay();
      }, 8000);
    };

    autoplay();

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [slider]);

  return (
    <div className="w-full px-4 lg:px-40 py-10 relative">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Resultados</h2>

      {/* Botões */}
      <button
        onClick={() => slider.current?.prev()}
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-primary hover:text-white transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => slider.current?.next()}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-primary hover:text-white transition"
      >
        <ChevronRight size={24} />
      </button>

      <div ref={sliderRef} className="keen-slider">
        {photos.map(photo => (
          <div key={photo.id} className="keen-slider__slide flex flex-col items-center px-2">
            <div className="w-full max-w-[600px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={800}
                quality={100}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            <p className="mt-3 text-center text-sm text-gray-700">{photo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoAlbum;
