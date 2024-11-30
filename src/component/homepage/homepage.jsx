import React, { useState, useEffect } from 'react';
import './homepage.css';

function HomePage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isPaused, setIsPaused] = useState(false); // State to track play/pause status

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                // Simulating an API call
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);

    // Play/Pause functionality
    useEffect(() => {
        const video = document.getElementById('heroVideo');

        const togglePlayPause = () => {
            if (!video) return;
            if (isPaused) {
                video.play(); 
                setIsPaused(false); 
            } else {
                video.pause(); 
                setIsPaused(true); 
            }
        };

        const videoControl = document.getElementById('videoControl');
        videoControl?.addEventListener('click', togglePlayPause);

        
        return () => {
            videoControl?.removeEventListener('click', togglePlayPause);
        };
    }, [isPaused]); 

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error.message}</div>;
    }

    return (
        <div className="homepage">
            <header className="header">
                <div className="logo">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                        alt="Netflix Logo"
                    />
                </div>
                <div className="header-right">
                    <select className="language-selector">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                    </select>
                    <button className="signin-button">Sign In</button>
                </div>
            </header>

            <div className="hero">
                <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    id="heroVideo"
                >
                    <source
                        src="https://media.w3.org/2010/05/sintel/trailer.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-content">
                    <h1>Unlimited Movies</h1>
                    <h1>TV Shows, and More</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                </div>
                <button className="video-control" id="videoControl">
                    {isPaused ? '▶' : '⏸'}
                </button>
            </div>

            <div className="email-section">
                <h2>
                    Ready to Watch? Enter your email to create or restart your
                    membership
                </h2>
                <form className="email-form">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        required
                    />
                    <button type="submit" className="cta-button">
                        Get Started
                    </button>
                </form>
            </div>
        </div>
    );
}

export default HomePage;
