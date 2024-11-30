import React, { useRef, useState, useEffect } from 'react';
import movie from '../poster/movie.jpg';
import movie2 from '../poster/movie2.jpg';
import movie3 from '../poster/movie3.jpg';
import movie4 from '../poster/movie4.jpg';
import movie5 from '../poster/movie5.jpg';
import movie6 from '../poster/movie6.jpg';
import './moviecard.css';

function MovieCard() {
    const scrollContainerRef = useRef(null);
    const [arrowDirection, setArrowDirection] = useState('right'); // State to track the arrow direction

    const movies = [
        { title: 'Spider-Man', poster: movie },
        { title: 'Batman', poster: movie2 },
        { title: 'Iron Man', poster: movie3 },
        { title: 'Superman', poster: movie4 },
        { title: 'Avengers', poster: movie5 },
        { title: 'Wonder Woman', poster: movie6 },
        { title: 'Guardians of the Galaxy', poster: movie },
        { title: 'The Flash', poster: movie2 },
        { title: 'Black Panther', poster: movie3 },
        { title: 'Justice League', poster: movie4 },
        { title: 'Thor', poster: movie5 },
        { title: 'Deadpool', poster: movie6 },
    ];

    // Scroll right function
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 270, // Adjust scroll width per click
                behavior: 'smooth',
            });
        }
    };

    // Scroll left function
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -270, // Adjust scroll width per click
                behavior: 'smooth',
            });
        }
    };

    // Handle scroll position detection and updating the arrow direction
    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            // Check if we're at the start or end of the scroll container
            if (container.scrollLeft === 0) {
                setArrowDirection('right'); // Arrow points right when at the start
            } else if (container.scrollWidth - container.scrollLeft === container.clientWidth) {
                setArrowDirection('left'); // Arrow points left when at the end
            }
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        container?.addEventListener('scroll', handleScroll);

        // Cleanup event listener
        return () => {
            container?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="horizontal-scroll">
            <h2>TRENDING NOW</h2>
            <div className="scroll-container" ref={scrollContainerRef}>
                {movies.map((movie, index) => (
                    <div className="movie-card" key={index}>
                        <img src={movie.poster} alt={`${movie.title} Poster`} />
                        <p>{movie.title}</p>
                    </div>
                ))}
            </div>
            <div className="scroll-arrow" onClick={arrowDirection === 'right' ? scrollRight : scrollLeft}>
                {arrowDirection === 'right' ? '›' : '‹'} {/* Toggle between right and left arrow */}
            </div>
        </div>
    );
}

export default MovieCard;
