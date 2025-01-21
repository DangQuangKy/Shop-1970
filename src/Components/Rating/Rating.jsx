import React from 'react';
import { Line } from 'rc-progress';
import { FaStar } from 'react-icons/fa';

const Rating = ({ ratings }) => {
    const starSize = 20;
    const starColor = '#FFD700';
    const starEmptyColor = '#D3D3D3';

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    size={starSize}
                    color={i <= rating / 20 ? starColor : starEmptyColor}
                    style={{ marginRight: '5px' }}
                />
            );
        }
        return stars;
    };

    return (
        <div>
            {ratings.map((rating, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: '10px' }}>
                            {renderStars(rating)}
                        </div>
                        <Line percent={rating} strokeWidth="4" strokeColor={starColor} />
                        <span style={{ marginLeft: '10px' }}>{`${rating}%`}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Rating;
