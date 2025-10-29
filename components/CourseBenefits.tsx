
import React from 'react';

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const benefits = [
    "Master AI video generation from text, images, or even audio.",
    "Save thousands of dollars on video creation software and hiring freelancers.",
    "Create professional-grade marketing videos in a fraction of the time.",
    "Learn to generate realistic AI voiceovers in any language.",
    "Discover secret prompts and workflows for stunning visual effects.",
    "Get lifetime access to our proven methods and future updates.",
];

const CourseBenefits: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-deep-gray mb-4">What You'll Be Able To Do</h2>
                    <p className="text-lg text-gray-600">After this course, you'll be a video creation powerhouse, equipped with skills that will put you ahead of the competition.</p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <CheckIcon />
                            <p className="text-gray-700">{benefit}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseBenefits;
