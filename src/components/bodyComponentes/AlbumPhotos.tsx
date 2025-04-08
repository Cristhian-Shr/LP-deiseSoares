import React from 'react';

const photos = [
  { id: 1, src: '/images/photo1.jpg', alt: 'Foto 1' },
  { id: 2, src: '/images/photo2.jpg', alt: 'Foto 2' },
  { id: 3, src: '/images/photo3.jpg', alt: 'Foto 3' },
  { id: 4, src: '/images/photo4.jpg', alt: 'Foto 4' },
  { id: 5, src: '/images/photo5.jpg', alt: 'Foto 5' },
  { id: 6, src: '/images/photo6.jpg', alt: 'Foto 6' },
  { id: 6, src: '/images/photo6.jpg', alt: 'Foto 7' },
  { id: 6, src: '/images/photo6.jpg', alt: 'Foto 8' },
  { id: 6, src: '/images/photo6.jpg', alt: 'Foto 9' },
  { id: 6, src: '/images/photo6.jpg', alt: 'Foto 10' },
  { id: 6, src: '/images/photo6.jpg', alt: 'Foto 11' },
  { id: 6, src: '/images/photo6.jpg', alt: 'Foto 12' },
];

const PhotoAlbum = () => {
  return (
    <div className="w-full p-4 bg-[linear-gradient(to_right,#c1c3b7,#a1a696,#808b77,#405740,#405740)] h-screen px-40">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Resultados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoAlbum;