
import React from 'react';

const CheckIcon: React.FC = () => (
    <div className="bg-primary/10 rounded-full p-1.5 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </div>
);

const benefits = [
    "Master AI video generation from text, images, or even audio.",
    "Save thousands of dollars on video creation software and hiring freelancers.",
    "Create professional-grade marketing videos in a fraction of the time.",
    "Learn to generate realistic AI voiceovers in any language.",
    "Discover secret prompts and workflows for stunning visual effects.",
    "Get lifetime access to our proven methods and future updates.",
    "Design professional sales funnels and websites to market your services.",
    "Learn how to host your sales funnel and website for free, saving on monthly costs.",
];

const CourseBenefits: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">What You'll Be Able To Do</h2>
                    <p className="text-lg text-light-text">After this course, you'll be a video creation powerhouse, equipped with skills that will put you ahead of the competition.</p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <CheckIcon />
                            <p className="text-light-text text-base md:text-lg">{benefit}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseBenefits;