
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-accent text-lg">
            We are here to assist you. Whether you have a question, a suggestion, or need spiritual guidance, please reach out.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-dark mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" rows={5} placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300">
                Submit
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-dark mb-2">Temple Address</h4>
              <p className="text-accent">123 Divine Path, Serenity City, 12345</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-dark mb-2">Opening Hours</h4>
              <p className="text-accent">Daily: 6:00 AM - 12:00 PM & 4:00 PM - 8:00 PM</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-dark mb-2">Contact Info</h4>
              <p className="text-accent">Email: info@temple.org</p>
              <p className="text-accent">Phone: (123) 456-7890</p>
            </div>
             <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.089438031555!2d-122.4194154846817!3d37.77492957975811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1a2b1329%3A0x867f71af47b46180!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1614801550102!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true}
                  loading="lazy"
                  title="Temple Location Map"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
   