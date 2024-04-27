import React, { useState, useEffect } from 'react';

const StarRating = ({ tutorId, onRate }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [timeoutId, setTimeoutId] = useState(null);

    const handleStarClick = (starValue) => {
        setRating(starValue);
        onRate(tutorId, starValue);
    };

    const handleMouseEnter = (starValue) => {
        // Cancela el temporizador cuando el mouse vuelve a entrar
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setHoverRating(starValue);
    };

    const handleMouseLeave = () => {
        // Inicia un temporizador de 1 segundo cuando el mouse sale
        const id = setTimeout(() => {
            setHoverRating(0);
        }, 1000); // 1000 milisegundos = 1 segundo

        setTimeoutId(id);
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starIcon = i <= (hoverRating || rating) ? '⭐' : '☆'; // Usa diferentes íconos para estrellas llenas o vacías
            stars.push(
                <span
                    key={i}
                    onClick={() => handleStarClick(i)}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    style={{ cursor: 'pointer', margin: '0 2px', fontSize: hoverRating ? '2rem' : '1.5rem' }} // Cambia el tamaño de la estrella en función de hoverRating
                >
                    {starIcon}
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="star-rating">
            {renderStars()}
        </div>
    );
};

export default StarRating;
