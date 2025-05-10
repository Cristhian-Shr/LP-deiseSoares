import Image from 'next/image';
import React from 'react';

const photos = [
  { id: 1, src: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg', alt: 'Resultado 1' },
  { id: 2, src: 'https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg', alt: 'Resultado 2' },
  { id: 3, src: 'https://images.pexels.com/photos/3764579/pexels-photo-3764579.jpeg', alt: 'Resultado 3' },
  { id: 4, src: 'https://images.pexels.com/photos/3764319/pexels-photo-3764319.jpeg', alt: 'Resultado 4' },
  { id: 5, src: 'https://images.pexels.com/photos/3764325/pexels-photo-3764325.jpeg', alt: 'Resultado 5' },
  { id: 6, src: 'https://images.pexels.com/photos/3764375/pexels-photo-3764375.jpeg', alt: 'Resultado 6' },
];

const PhotoAlbum = () => {
  return (
    <div className="w-full py-20 px-4 lg:px-40 bg-gradient-to-b from-primary/90 to-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-terciary">Resultados Transformadores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map(photo => (
            <div key={photo.id} className="group relative overflow-hidden rounded-2xl shadow-xl">
              <div className="aspect-square relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoAlbum;