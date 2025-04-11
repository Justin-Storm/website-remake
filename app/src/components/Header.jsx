import React from 'react';
import './Header.css';
import {
    headerCarousel
} from './data';

export const Header = () => {
    return (
        <div id='headerCarousel' className='carousel slide' data-bs-ride='carousel'>
            <div class="carousel-indicators">
                {headerCarousel.map((_, index) => (
                    <button
                        key={index} 
                        type="button" 
                        data-bs-target="#carousel" 
                        data-bs-slide-to={index} 
                        className={index === 0 ? 'active' : ''} 
                        aria-current={index === 0 ? 'true' : undefined} 
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className='carousel-inner'>
                {headerCarousel.map((slide, index) => (
                    <div
                        className={`carousel-item ${index === 0 ? 'active' : ''}`} 
                        key={index}
                        style={{ background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.background}) center/cover` }}
                    >
                        <div className='content'>
                            <h1>{slide.headline.toUpperCase()}</h1>
                            <p>{slide.subtext}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}