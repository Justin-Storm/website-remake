import React from 'react';
import './featuredShoe.css';
import { featuredShoe } from './data';
import FeaturedShoeImg from './images/featuredShoe.png'

export default function FeaturedShoe() {
    return (
        <div className='featured-shoe'>
            <div className='top'>
                <h1>{featuredShoe.shoe1.headline}</h1>
                <p>{featuredShoe.shoe1.shoe}</p>
                <button>Shop</button>
            </div>
            <img src={FeaturedShoeImg} alt={featuredShoe.shoe1.shoe} />
        </div>
    )
}