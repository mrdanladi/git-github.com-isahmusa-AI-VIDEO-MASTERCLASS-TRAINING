
import React, { useState } from 'react';
import CtaButton from './CtaButton';
import { PAYMENT_DETAILS } from '../constants';
import { submitLead, LeadData } from '../services/leadService';


const PaymentDetails: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(PAYMENT_DETAILS.accountNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-blue-50 border-2 border-dashed border-electric-blue rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-deep-gray text-center mb-4">Get Instant Access Now!</h3>
            <p className="text-center text-gray-600 mb-6">Complete your enrollment by making a payment of <span className="font-bold text-electric-blue text-lg">{PAYMENT_DETAILS.coursePrice}</span> to the account below:</p>
            <div className="space-y-4 text-left bg-white p-4 rounded-lg shadow-inner">
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Bank Name:</span>
                    <span className="font-semibold text-deep-gray">{PAYMENT_DETAILS.bankName}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Account Name:</span>
                    <span className="font-semibold text-deep-gray">{PAYMENT_DETAILS.accountName}</span>
                </div>
                 <div className="flex justify-between items-center">
                    <span className="text-gray-500">Account Number:</span>
                    <span className="font-semibold text-deep-gray">{PAYMENT_DETAILS.accountNumber}</span>
                </div>
            </div>
            <button onClick={handleCopy} className="w-full mt-6 bg-electric-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {copied ? 'Copied!' : 'Copy Account Number'}
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
                After payment, send your proof of payment via WhatsApp for instant confirmation.
            </p>
            <a href={PAYMENT_DETAILS.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full mt-2 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-4.664-2.436a.75.75 0 00-1.214-.882l-1.938 2.668-1.01-1.01a.75.75 0 00-1.06 1.061l1.5 1.5a.75.75 0 001.137-.083l2.5-3.435z" clipRule="evenodd" /></svg>
                Send Proof on WhatsApp
            </a>
        </div>
    );
}

const LeadForm: React.FC = () => {
    const [formData, setFormData] = useState<LeadData>({ name: '', email: '', whatsapp: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await submitLead(formData);
            if (response.success) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };
    
    if (status === 'success') {
        return (
            <div className="text-center bg-green-50 border border-green-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-green-700">Thank You!</h3>
                <p className="text-green-600 mt-2">Your details have been received. Please proceed with the payment to get access.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-2xl font-bold text-deep-gray text-center mb-1">Enter Your Details</h3>
            <p className="text-center text-gray-500 mb-4">To receive course access and updates.</p>
            <div>
                <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:outline-none"/>
            </div>
            <div>
                <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:outline-none"/>
            </div>
            <div>
                <input type="tel" name="whatsapp" placeholder="WhatsApp Number" required value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:outline-none"/>
            </div>
            <CtaButton type="submit" className="w-full" disabled={status === 'loading'}>
                {status === 'loading' ? 'Submitting...' : 'Join The Course Now'}
            </CtaButton>
            {status === 'error' && <p className="text-red-500 text-center text-sm mt-2">Something went wrong. Please try again.</p>}
        </form>
    )
}

const CtaSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
                    <LeadForm />
                    <PaymentDetails />
                </div>
            </div>
        </section>
    );
}

export default CtaSection;
