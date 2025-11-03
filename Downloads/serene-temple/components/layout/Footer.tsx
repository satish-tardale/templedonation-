
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: "Facebook", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>, href: "#" },
    { name: "Twitter", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.634 4.214 3.791 4.649-.469.128-.962.192-1.465.192-.411 0-.822-.04-1.227-.118.63 1.953 2.445 3.377 4.604 3.417-1.77 1.39-4.01 2.213-6.44 2.213-.42 0-.835-.025-1.244-.073 2.289 1.474 5.026 2.33 8.016 2.33 9.617 0 14.897-7.977 14.897-14.897 0-.227-.005-.453-.014-.678.98-.707 1.826-1.59 2.5-2.589z"/></svg>, href: "#" },
    { name: "Instagram", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>, href: "#" },
  ];

  return (
    <footer className="bg-dark text-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-2xl text-primary mb-4">Serene Sanctuary</h3>
            <p className="text-sm leading-relaxed">A spiritual haven for peace, prayer, and community. We are dedicated to preserving sacred traditions and serving humanity.</p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} className="text-secondary hover:text-primary transition-colors duration-300" aria-label={link.name}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-primary transition-colors">Events</a></li>
              <li><a href="#donate" className="hover:text-primary transition-colors">Donate</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 tracking-wider">Contact Us</h4>
            <address className="not-italic space-y-2 text-sm">
              <p>123 Divine Path, Serenity City, 12345</p>
              <p>Email: <a href="mailto:info@temple.org" className="hover:text-primary transition-colors">info@temple.org</a></p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4 tracking-wider">Newsletter</h4>
            <p className="text-sm mb-4">Receive spiritual updates and event news.</p>
            <form>
              <div className="flex">
                <input type="email" placeholder="Your Email" className="bg-gray-700 w-full p-2 rounded-l-md focus:outline-none text-white text-sm" />
                <button type="submit" className="bg-primary hover:bg-primary-dark text-white p-2 px-4 rounded-r-md transition-colors">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Serene Temple Sanctuary. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
   