
import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { PAYMENT_DETAILS } from '../constants';

const CountdownTimer: React.FC = () => {
    // Set target date to 2 days from now
    const targetDate = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    const TimerBox = ({ value, label }: { value: number, label: string }) => (
        <div className="flex flex-col items-center justify-center bg-gray-700/50 border border-gray-600 rounded-lg p-4 w-20 h-20 md:w-28 md:h-28 text-white">
            <span className="text-3xl md:text-5xl font-bold">{value.toString().padStart(2, '0')}</span>
            <span className="text-xs md:text-sm uppercase tracking-wider text-gray-300">{label}</span>
        </div>
    );

    return (
        <section className="bg-gradient-to-r from-dark-text to-gray-900 py-12">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">Special Launch Offer Ends Soon!</h2>
                <p className="text-white mb-6">Get The Course for <span className="font-bold text-xl">{PAYMENT_DETAILS.coursePrice}</span> instead of <span className="line-through">{PAYMENT_DETAILS.originalPrice}</span></p>
                <div className="flex justify-center items-center space-x-2 md:space-x-4">
                    <TimerBox value={days} label="Days" />
                    <TimerBox value={hours} label="Hours" />
                    <TimerBox value={minutes} label="Minutes" />
                    <TimerBox value={seconds} label="Seconds" />
                </div>
            </div>
        </section>
    );
};

export default CountdownTimer;