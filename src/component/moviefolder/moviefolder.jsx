import React, { useRef, useState, useEffect } from 'react';
import actionImage from '../poster/mov.jpg';
import comedyImage from '../poster/movie.jpg';
import dramaImage from '../poster/movie5.jpg';
import horrorImage from '../poster/movie2.jpg';
import scifiImage from '../poster/movie3.jpg';
import romanticImage from '../poster/movie4.jpg';
import thrillerImage from '../poster/movie5.jpg';
import adventureImage from '../poster/movie3.jpg';
import animatedImage from '../poster/movie6.jpg';
import fantasyImage from '../poster/movie.jpg';
import historicalImage from '../poster/movie2.jpg';
import './moviefolder.css';

function MovieFolder() {
    const folderContainerRef = useRef(null); // Ref for the scroll container
    const [arrowDirection, setArrowDirection] = useState('right'); // State to track the arrow direction

    const folders = [
        { name: 'Action Movies', poster: actionImage },
        { name: 'Comedy Movies', poster: comedyImage },
        { name: 'Drama Movies', poster: dramaImage },
        { name: 'Horror Movies', poster: horrorImage },
        { name: 'Sci-Fi Movies', poster: scifiImage },
        { name: 'Romantic Movies', poster: romanticImage },
        { name: 'Thriller Movies', poster: thrillerImage },
        { name: 'Adventure Movies', poster: adventureImage },
        { name: 'Animated Movies', poster: animatedImage },
        { name: 'Fantasy Movies', poster: fantasyImage },
        { name: 'Historical Movies', poster: historicalImage },
    ];

    // Scroll right function
    const scrollRight = () => {
        if (folderContainerRef.current) {
            folderContainerRef.current.scrollBy({
                left: 250, // Adjust the scroll width per click
                behavior: 'smooth',
            });
        }
    };

    // Scroll left function
    const scrollLeft = () => {
        if (folderContainerRef.current) {
            folderContainerRef.current.scrollBy({
                left: -250, // Adjust the scroll width per click
                behavior: 'smooth',
            });
        }
    };

    // Handle scroll position detection and updating the arrow direction
    const handleScroll = () => {
        const container = folderContainerRef.current;
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
        const container = folderContainerRef.current;
        container?.addEventListener('scroll', handleScroll);

        // Cleanup event listener
        return () => {
            container?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="horizontal-folder-scroll">
            <h2>ONLY ON NETFLIX</h2>
            <div className="folder-scroll-container" ref={folderContainerRef}>
                {folders.map((folder, index) => (
                    <div className="folder-card" key={index}>
                        <img src={folder.poster} alt={`${folder.name} Poster`} />
                        <p>{folder.name}</p>
                    </div>
                ))}
            </div>
            <div
                className="scroll-arrow"
                onClick={arrowDirection === 'right' ? scrollRight : scrollLeft}
            >
                {arrowDirection === 'right' ? '›' : '‹'} {/* Toggle between right and left arrow */}
            </div>
        </div>
    );
}

export default MovieFolder;
