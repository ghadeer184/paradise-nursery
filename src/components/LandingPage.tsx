import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page flex items-center justify-center">
            <div className="container text-center p-8">
                <h1 className="text-4xl font-bold mb-4">Paradise Nursery</h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Transform your home into a green paradise with our premium collection of houseplants. 
                    Bringing nature's beauty to your doorstep.
                </p>
                <button 
                    className="btn btn-primary btn-lg hover-up"
                    onClick={() => navigate('/shop')}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default LandingPage;