import React from "react";
import './classics.css'
import { classics } from "./data";

export default function Classics() {
    return (
        <>
            {classics.map((shoe, index) =>  (
                <div 
                    className="shoe" 
                    key={index}
                >
                    <p className="index">{index + 1} / {classics.length}</p>
                    <p>{shoe.name}</p>
                    <img 
                        src={shoe.image} 
                        alt={shoe.name} 
                        style={{ 
                            width: `${shoe.width}%`, 
                            left: shoe.left ? `${shoe.left}%` : '30%',
                        }} 
                    />
                </div>
            ))}
        </>
    )
}