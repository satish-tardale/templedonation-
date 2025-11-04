
import React from 'react';

const campaigns = [
  {
    title: "Temple Renovation Fund",
    description: "Help us restore the sacred murals and preserve the timeless architecture of our beloved temple.",
    goal: 50000,
    raised: 35750,
    imageUrl: "https://picsum.photos/600/400?random=3",
  },
  {
    title: "Community Kitchen (Annadanam)",
    description: "Support our daily initiative to provide free, blessed meals to all devotees and those in need.",
    goal: 25000,
    raised: 18200,
    imageUrl: "https://picsum.photos/600/400?random=4",
  },
  {
    title: "Spiritual Library Expansion",
    description: "Contribute to building a comprehensive library of sacred texts and spiritual literature for all ages.",
    goal: 15000,
    raised: 6500,
    imageUrl: "https://picsum.photos/600/400?random=5",
  },
];

const CampaignCard: React.FC<typeof campaigns[0]> = ({ title, description, goal, raised, imageUrl }) => {
  const progress = Math.round((raised / goal) * 100);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-serif font-bold text-dark mb-2">{title}</h3>
        <p className="text-accent text-sm mb-4 flex-grow">{description}</p>
        <div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="flex justify-between text-sm font-medium">
            <span className="text-dark">Raised: ${raised.toLocaleString()}</span>
            <span className="text-accent">Goal: ${goal.toLocaleString()}</span>
          </div>
        </div>
        <button className="mt-6 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full hover:bg-primary/20 transition-colors">
          Contribute Now
        </button>
      </div>
    </div>
  );
};

const Campaigns: React.FC = () => {
  return (
    <section id="campaigns" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Our Fundraising Campaigns</h2>
          <p className="max-w-2xl mx-auto text-accent text-lg">
            Your contributions directly support these vital projects. Be a part of our journey to enrich our community's spiritual life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.title} {...campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
   