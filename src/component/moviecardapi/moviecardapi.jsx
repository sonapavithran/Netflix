import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import './moviecardapi.css';

function MovieCardAPI() {
    const scrollContainerRef = useRef(null);
    const [movies, setMovies] = useState([]);
    const [arrowDirection, setArrowDirection] = useState('right'); // Tracks arrow direction
    const [error, setError] = useState('');

    // Example movie titles for the API
    const movieTitles = [
        'spider+man',
        'batman',
        'iron+man',
        'avengers',
        'wonder+woman',
        'anime',
        'Horror',
        'cartoon'
    ];

    // Fetch movie data
    const fetchMoviesData = async () => {
        try {
            const movieDataPromises = movieTitles.map((title) =>
                axios.get(`http://www.omdbapi.com/?apikey=b6bd2f99&type=movie&t=${title}`)
            );

            const responses = await Promise.all(movieDataPromises);
            const fetchedMovies = responses
                .map((response) => (response.data.Response === 'True' ? response.data : null))
                .filter((movie) => movie !== null);

            setMovies(fetchedMovies);
        } catch (err) {
            setError('Error fetching movie data!');
        }
    };

    // Handle scroll right
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 270, // Adjust scroll width per click
                behavior: 'smooth',
            });
        }
    };

    // Handle scroll left
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -270, // Adjust scroll width per click
                behavior: 'smooth',
            });
        }
    };

    // Update arrow direction based on scroll position
    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            if (container.scrollLeft === 0) {
                setArrowDirection('right');
            } else if (container.scrollWidth - container.scrollLeft === container.clientWidth) {
                setArrowDirection('left');
            }
        }
    };

    useEffect(() => {
        fetchMoviesData();
    }, []);

    useEffect(() => {
        const container = scrollContainerRef.current;
        container?.addEventListener('scroll', handleScroll);

        return () => {
            container?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="horizontal-scroll-api">
            <h2>Trending Movies</h2>
            <div className="scroll-container-api" ref={scrollContainerRef}>
                {movies.map((movie, index) => (
                    <div className="movie-card-api" key={index}>
                        <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                        <p>{movie.Title}</p>
                    </div>
                ))}
            </div>
            <div
                className="scroll-arrow-api"
                onClick={arrowDirection === 'right' ? scrollRight : scrollLeft}
            >
                {arrowDirection === 'right' ? '›' : '‹'}
            </div>
            {error && <p className="error-message-api">{error}</p>}
        </div>
    );
}

export default MovieCardAPI;
