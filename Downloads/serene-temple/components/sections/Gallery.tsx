
import React from 'react';

const galleryImages = [
  "https://picsum.photos/600/400?random=20",
  "https://picsum.photos/400/600?random=21",
  "https://picsum.photos/600/400?random=22",
  "https://picsum.photos/600/400?random=23",
  "https://picsum.photos/400/600?random=24",
  "https://picsum.photos/600/400?random=25",
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Memories &amp; Moments</h2>
          <p className="max-w-2xl mx-auto text-accent text-lg">
            Explore cherished moments from our festivals, celebrations, and community gatherings.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg cursor-pointer group">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
   