
import React from 'react';

const events = [
  {
    date: "25",
    month: "DEC",
    title: "Annual Gita Jayanti",
    time: "9:00 AM - 1:00 PM",
    description: "Join us for a day of chanting, spiritual discourses, and celebration of the sacred Bhagavad Gita.",
  },
  {
    date: "01",
    month: "JAN",
    title: "New Year's Day Puja",
    time: "6:00 AM - 8:00 AM",
    description: "Start the new year with divine blessings. A special ceremony to invoke peace and prosperity for all.",
  },
  {
    date: "14",
    month: "JAN",
    title: "Makar Sankranti Festival",
    time: "10:00 AM - 4:00 PM",
    description: "A festive celebration marking the sun's transit, featuring special prayers, food, and cultural activities.",
  },
];

const EventCard: React.FC<typeof events[0]> = ({ date, month, title, time, description }) => {
  return (
    <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex-shrink-0 text-center">
        <div className="bg-primary text-white text-3xl font-bold rounded-t-lg py-2 px-4">{date}</div>
        <div className="bg-dark text-white text-md font-semibold rounded-b-lg py-1 px-4 uppercase">{month}</div>
      </div>
      <div>
        <h3 className="text-xl font-serif font-bold text-dark mb-1">{title}</h3>
        <p className="text-primary font-medium text-sm mb-2">{time}</p>
        <p className="text-accent text-sm mb-4">{description}</p>
        <button className="text-primary font-bold text-sm hover:text-primary-dark transition-colors">Register Now &rarr;</button>
      </div>
    </div>
  );
}

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Upcoming Events</h2>
          <p className="max-w-2xl mx-auto text-accent text-lg">
            Participate in our spiritual gatherings and cultural celebrations. All are welcome to join and receive blessings.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
   