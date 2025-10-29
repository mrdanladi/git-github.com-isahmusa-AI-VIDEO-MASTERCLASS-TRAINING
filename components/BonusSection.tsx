import React from 'react';

const GiftIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
);

const bonuses = [
    { title: "1000+ Viral Video Prompts", description: "Never run out of ideas with our curated list of prompts guaranteed to get views." },
    { title: "AI Content Monetization Blueprint", description: "A step-by-step guide on how to turn your AI-generated videos into a profitable business." },
    { title: "Private Student Community Access", description: "Network with other creators, get feedback, and stay updated on the latest AI tools." },
    { title: "Done-For-You Sales Funnel", description: "Receive a fully customizable, high-converting sales funnel website template to kickstart your online business." },
    { title: "Free CapCut Pro Access", description: "Get access to the pro version of CapCut for free, unlocking premium features to create even more stunning videos." },
    { title: "🔥 A Readymade Website", description: "Get a professionally designed, plug-and-play website to showcase your brand and services instantly." },
    { title: "🔥 The Marketing Resources", description: "Access a library of proven marketing templates, scripts, and strategies to attract high-paying clients." },
    { title: "🔥 1:1 Strategy Session", description: "A personalized coaching call to map out your business growth and answer your most pressing questions." },
    { title: "🔥 Business Growth Framework (Priceless)", description: "The exact framework to scale your business from ₦500,000 to over ₦5,000,000 monthly." },
];

const BonusCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-white rounded-lg shadow-md border border-border-color p-6 text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="bg-primary/10 p-4 rounded-full mb-4">
            <GiftIcon />
        </div>
        <h3 className="text-xl font-bold text-dark-text mb-2 flex-grow">{title}</h3>
        <p className="text-sm text-light-text">{description}</p>
    </div>
);

const BonusSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Get These Exclusive Bonuses (Worth Over ₦2,000,000) FREE!</h2>
                    <p className="text-lg text-light-text">Enroll today and get instant access to these game-changing resources to accelerate your success.</p>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bonuses.map((bonus, index) => (
                        <BonusCard key={index} title={bonus.title} description={bonus.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BonusSection;