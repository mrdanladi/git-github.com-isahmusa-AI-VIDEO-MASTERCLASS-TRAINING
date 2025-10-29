
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { FAQItem } from '../types';

const AccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-border-color py-4">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-lg text-dark-text">{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
            </button>
            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <p className="text-light-text pt-4">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    )
}

const FAQ: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-light-text">Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {FAQ_ITEMS.map((item, index) => (
                        <AccordionItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;