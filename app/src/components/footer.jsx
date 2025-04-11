import React, { useState, useEffect } from "react";
import './footer.css';
import { 
    footerTopLinks, 
    footerMiddleLinks, 
    footerBottomLinks, 
    guidesList, } from "./data";

export default function Footer() {
    const [hovered, setHovered] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);
    const [openCategory, setOpenCategory] = useState(null);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [guidesListLinks, setGuidesListLinks] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 800);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleCategoryClick = (category) => {
        if (!isLargeScreen) {
            setOpenCategory((prev) => (prev === category ? null : category));
        }
    };

    return (
        <footer>
            <div 
                className="top"
                onMouseOver={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
            >
                {Object.entries(footerTopLinks).map(([category, items]) => (
                    <div className="category" key={category}>
                        <h4
                            onClick={() => handleCategoryClick(category)}
                            tabIndex={0}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h4>
                        <div className={`items ${
                            isLargeScreen
                                ? (hovered ? 'show' : '')
                                : (openCategory === category ? 'show' : '')
                        }`}>
                            <div>
                                {items.map((item, index) => (
                                    <a href="#" key={index}>{item}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="middle">
                <div className="left">
                    <hr />
                    {Object.entries(footerMiddleLinks).map(([category, items]) => (
                        <>
                            <div className="category" key={category}>
                                <div className="category-header">
                                    <h6>{category === 'promotions' ? 'Promotions & Discounts' : category.charAt(0).toUpperCase() + category.slice(1)}</h6>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                                </div>
                                <div className="items">
                                    <div>
                                        {items.map((item, index) => (
                                            <a href="#" key={index}>{item}</a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </>
                    ))}
                </div>
                <div className="right">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>
                        United States
                    </a>
                    <hr />
                </div>
            </div>
            <div className="bottom">
                <a href="#">&copy; {currentYear} Nike, Inc. All Rights Reserved</a>
                {footerBottomLinks.map((item, index) => (
                    <a 
                        href="#" 
                        key={index} 
                        onMouseOver={item.text === 'Guides' ? () => setGuidesListLinks(true) : null}
                        onMouseLeave={item.text === 'Guides' ? () => setGuidesListLinks(false) : null}
                    >
                        {item.image && 
                            <img src={item.image} />
                        }
                        {item.text}
                        {item.arrow && 
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                        }    
                        {item.text === 'Guides' && 
                            <div className={`guides-list ${guidesListLinks ? 'show' : ''}`}>
                                {guidesList.map((item, index) => (
                                    <a href="#" key={index}>{item}</a>
                                ))}
                            </div>
                        }
                    </a>
                ))}
            </div>
        </footer>
    );
}
