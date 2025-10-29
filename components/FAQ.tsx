
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { FAQItem } from '../types';

const AccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-lg text-deep-gray">{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-gray-600">
                    {item.answer}
                </p>
            </div>
        </div>
    )
}

const FAQ: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-deep-gray mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.</p>
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
