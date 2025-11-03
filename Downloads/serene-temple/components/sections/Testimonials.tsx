
import React from 'react';

const testimonials = [
  {
    quote: "This temple is my second home. The sense of peace I feel here is indescribable. The community is so welcoming and supportive.",
    name: "Anjali Sharma",
    location: "Devotee for 10+ years",
    avatarUrl: "https://picsum.photos/100/100?random=10",
  },
  {
    quote: "My family and I are grateful for the spiritual guidance and cultural education our children receive here. It's a true blessing to our community.",
    name: "Rajesh Patel",
    location: "Regular Visitor",
    avatarUrl: "https://picsum.photos/100/100?random=11",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Words from Our Devotees</h2>
          <p className="max-w-2xl mx-auto text-accent text-lg">
            Hear from members of our community about their experiences and the impact of the temple on their lives.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
              <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-4 border-primary/50" />
              <p className="text-accent italic mb-6">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <h4 className="font-bold text-dark text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
   