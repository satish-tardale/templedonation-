
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">A Legacy of Devotion &amp; Community</h2>
            <p className="text-accent mb-4 leading-relaxed">
              Established decades ago by a group of devout followers, our temple has grown into a vibrant spiritual center. It stands as a testament to faith, a sanctuary for seekers, and a hub for cultural and charitable activities.
            </p>
            <p className="text-accent mb-6 leading-relaxed">
              Our mission is to provide a serene environment for worship, foster a strong sense of community, and uphold the timeless values of compassion, service, and spiritual growth. We welcome everyone with an open heart to join our family.
            </p>
            <a href="#" className="text-primary font-bold hover:text-primary-dark transition-colors">
              Learn More About Our History &rarr;
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://picsum.photos/800/600?random=2" 
              alt="Interior of the temple with intricate carvings" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
   