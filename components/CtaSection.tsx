
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
        <div className="bg-white border border-border-color rounded-xl p-6 md:p-8 shadow-md">
            <h3 className="text-2xl font-bold text-dark-text text-center mb-4">Get Instant Access Now!</h3>
            <p className="text-center text-light-text mb-6">Complete your enrollment by making a payment of <span className="font-bold text-primary text-lg">{PAYMENT_DETAILS.coursePrice}</span> to the account below:</p>
            <div className="space-y-4 text-left bg-light-bg p-4 rounded-lg border border-border-color">
                <div className="flex justify-between items-center">
                    <span className="text-light-text">Bank Name:</span>
                    <span className="font-semibold text-dark-text">{PAYMENT_DETAILS.bankName}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-light-text">Account Name:</span>
                    <span className="font-semibold text-dark-text">{PAYMENT_DETAILS.accountName}</span>
                </div>
                 <div className="flex justify-between items-center">
                    <span className="text-light-text">Account Number:</span>
                    <span className="font-semibold text-dark-text">{PAYMENT_DETAILS.accountNumber}</span>
                </div>
            </div>
            <button onClick={handleCopy} className="w-full mt-6 bg-primary/10 text-primary py-3 rounded-lg font-semibold hover:bg-primary/20 transition-colors">
                {copied ? 'Copied!' : 'Copy Account Number'}
            </button>
            <p className="text-center text-sm text-light-text mt-4">
                After payment, send your proof of payment via WhatsApp for instant confirmation.
            </p>
            <a href={PAYMENT_DETAILS.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full mt-2 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
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
                <h3 className="text-2xl font-bold text-green-800">Thank You!</h3>
                <p className="text-green-700 mt-2">Your details have been received. Please proceed with the payment to get instant access.</p>
            </div>
        )
    }

    return (
        <div className="bg-white border border-border-color rounded-xl p-6 md:p-8 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold text-dark-text text-center mb-1">Enter Your Details</h3>
                <p className="text-center text-light-text mb-4">To receive course access and updates.</p>
                <div>
                    <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"/>
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"/>
                </div>
                <div>
                    <input type="tel" name="whatsapp" placeholder="WhatsApp Number" required value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"/>
                </div>
                <CtaButton type="submit" className="w-full" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Submitting...' : 'Complete My Enrollment'}
                </CtaButton>
                {status === 'error' && <p className="text-red-500 text-center text-sm mt-2">Something went wrong. Please try again.</p>}
            </form>
        </div>
    )
}

const CtaSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-light-bg">
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