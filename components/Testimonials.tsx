
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);


const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-border-color transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex text-secondary mb-4">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
        </div>
        <p className="text-light-text mb-6 italic">"{testimonial.quote}"</p>
        <div className="flex items-center">
            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover"/>
            <div>
                <p className="font-bold text-dark-text">{testimonial.name}</p>
                <p className="text-sm text-light-text">{testimonial.title}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-light-bg">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Don't Just Take Our Word For It</h2>
                    <p className="text-lg text-light-text">See what our successful students have to say about their transformation.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;