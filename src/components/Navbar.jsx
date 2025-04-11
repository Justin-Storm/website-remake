import './Navbar.css'
import nikeLogo from './images/logo.png'
import jordanLogo from './images/jordan.png'
import converseLogo from './images/converse.png'
import { 
    jordanMegaMenu,
    kidsMegaMenu,
    menMegaMenu, 
    navbarCategories, 
    navbarIcons, 
    newMegaMenu, 
    sidebarBottomLinks, 
    sportMegaMenu,
    womenMegaMenu,
    searchTerms,
    helpList,
} from './data'
import React, { useState } from 'react'

export const Navbar = () => {
    const [megaMenu, setMegaMenu] = useState(false);
    const [megaMenuContent, setMegaMenuContext] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [categorySubView, setCategorySubView] = useState(null);
    const [innerCategorySubView, setInnerCategorySubView] = useState(null);
    const [showSearchView, setShowSearchView] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [navbarHelpLinks, showNavbarHelpLinks] = useState(false);

    const handleMegaMenu = (index) => {
        setMegaMenu(true);
        setMegaMenuContext(index);
    }

    const handleLeaveNavbar = () => {
        setMegaMenu(false);
        setMegaMenuContext(null);
    }

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        setCategorySubView(null);
        setInnerCategorySubView(null);
    }

    const handleCancelShowSearchView = () => {
        setSearchInputValue('');
        setShowSearchView(false);
    }

    return (
        <>
        <nav className='px-4' onMouseLeave={handleLeaveNavbar}>
            <div className='top' onMouseOver={handleLeaveNavbar}>
                <div>
                    <img src={jordanLogo} alt='Jordan' />
                    <img src={converseLogo} alt='Converse' />
                </div>
                <div>
                    <a href='#'>Find a Store</a>
                    <hr />
                    <a href='#' 
                        onMouseOver={() => showNavbarHelpLinks(true)}
                        onMouseLeave={() => showNavbarHelpLinks(false)}
                    >
                        Help
                        <div className={`help-list ${navbarHelpLinks ? 'show' : ''}`}>
                            <h5>Help</h5>
                            {helpList.map((item, index) => (
                                <a href='#' key={index}>{item}</a>
                            ))}
                        </div>
                    </a>
                    <hr />
                    <a href='#'>Join Us</a>
                    <hr />
                    <a href='#'>Sign In</a>
                </div>
            </div>
            <div className='main'>
                <img src={nikeLogo} alt='logo'onClick={() => setMegaMenu(!megaMenu)} />
                <div className='categories'>
                    {navbarCategories.map((category, index) => (
                        <a href='#' key={index} onMouseOver={() => handleMegaMenu(index)}>
                            {category}
                            <div className='mega-menu'></div>
                        </a>
                    ))}
                </div>
                <div className='icons'>
                    {navbarIcons.map((icon, index) => (
                        <button className={icon.name} key={index} onClick={icon.name === 'menu' ? toggleSidebar : icon.name === 'search' ? () => setShowSearchView(true) : null}>
                            <div className='icon'>
                                {icon.svg}
                            </div>
                            {icon.name === 'search' && 
                                <div className='search-word'>Search</div>
                            }
                        </button>
                    ))}
                </div>
            </div>
            <div className={`mega-menu ${megaMenu ? 'show' : ''}`}>
                <div className="content">
                    {megaMenuContent === 0 &&
                        <div className='inner-content'>
                            <div className="links">
                                <h3 className='mb-2'>Featured</h3>
                                {newMegaMenu.featured.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                            <div className="links">
                                <h3 className='mb-2'>Show New</h3>
                                {newMegaMenu.shopNew.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                            <div className="links">
                                <h3 className='mb-2'>Trending</h3>
                                {newMegaMenu.trending.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>

                    }
                    {megaMenuContent === 1 &&
                        <div className='inner-content'>
                            <div className="links">
                                <h3 className='mb-2'>Featured</h3>
                                {menMegaMenu.featured.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                            <div className="links">
                                <h3 className='mb-2'>Shoes</h3>
                                {menMegaMenu.shoes.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                            <div className="links">
                                <h3 className='mb-2'>Clothing</h3>
                                {menMegaMenu.clothing.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                            <div className="links">
                                <h3 className='mb-2'>Accessories</h3>
                                {menMegaMenu.accessories.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {megaMenuContent === 2 &&
                        <div className="inner-content">
                            <div className="links">
                                <h3 className='mb-2'>Featured</h3>
                                {womenMegaMenu.featured.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                            <div className="links">
                                <h3 className='mb-2'>Shop by Color</h3>
                                {womenMegaMenu.shopByColor.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                            <div className="links">
                                <h3 className='mb-2'>Shoes</h3>
                                {womenMegaMenu.shoes.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                            <div className="links">
                                <h3 className='mb-2'>Clothing</h3>
                                {womenMegaMenu.clothing.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                            <div className="links">
                                <h3 className='mb-2'>Accessories</h3>
                                {womenMegaMenu.accessories.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {megaMenuContent === 3 && 
                        <div className="inner-content">
                            <div className="links">
                                <h3 className='mb-2'>Featured</h3>
                                {kidsMegaMenu.featured.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                            <div className="column">
                                <div className="links">
                                    <h3 className='mb-2'>Shoes by Age</h3>
                                    {kidsMegaMenu.shoesByAge.map((link, index) => (
                                        <a href='#' key={index}>{link}</a>
                                    ))}
                                </div>
                                <div className="links">
                                    <h3 className='mb-2'>All Shoes</h3>
                                    {kidsMegaMenu.allShoes.map((link, index) => (
                                        <a href='#' key={index}>{link}</a>
                                    ))}
                                </div>
                            </div>
                            <div className="column">
                                <div className="links">
                                    <h3 className='mb-2'>Clothing by Age</h3>
                                    {kidsMegaMenu.clothingByAge.map((link, index) => (
                                        <a href='#' key={index}>{link}</a>
                                    ))}
                                </div>
                                <div className="links">
                                    <h3 className='mb-2'>All Clothing</h3>
                                    {kidsMegaMenu.allClothing.map((link, index) => (
                                        <a href='#' key={index}>{link}</a>
                                    ))}
                                </div>
                            </div>
                            <div className="column">
                                <div className="links">
                                    <h3 className='mb-2'>Accessories</h3>
                                    {kidsMegaMenu.accessories.map((link, index) => (
                                        <a href='#' key={index}>{link}</a>
                                    ))}
                                </div>
                                <div className="links">
                                    <h3 className='mb-2'>Shop by Sport</h3>
                                    {kidsMegaMenu.shopBySport.map((link, index) => (
                                        <a href='#' key={index}>{link}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    }
                    {megaMenuContent === 4 &&
                        <div className="inner-content">
                            <div className="column">
                                <div className="links">
                                    <h3 className='mb-2'>Featured</h3>
                                    {jordanMegaMenu.featured.map((link, index) => (
                                        <a href='#' key={index}>{link}</a>
                                    ))}
                                </div>
                                <div className="links">
                                    <h3 className='mb-2'>Collections</h3>
                                    {jordanMegaMenu.collections.map((link, index) => (
                                        <a href='#' key={index}>{link}</a>
                                    ))}
                                </div>
                            </div>
                            <div className="links">
                                <h3 className='mb-2'>Men</h3>
                                {jordanMegaMenu.men.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                            <div className="links">
                                <h3 className='mb-2'>Women</h3>
                                {jordanMegaMenu.women.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                            <div className="links">
                                <h3 className='mb-2'>Kids</h3>
                                {jordanMegaMenu.kids.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                            <div className="links">
                                <h3 className='mb-2'>Accessories</h3>
                                {jordanMegaMenu.accessories.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {megaMenuContent === 5 &&
                        <div className='inner-content'>
                            <div className="column">
                                <div className="links">
                                    <h3 className="mb-2">Basketball</h3>
                                    {sportMegaMenu.basketball.map((link, index) => (
                                        <a href='#' key={index}>{link}</a>
                                    ))}
                                </div>
                                <div className="links">
                                    <h3 className='mb-2'>Training</h3>
                                    {sportMegaMenu.training.map((link, index) => (
                                        <a href='#' key={index}>{link}</a>
                                    ))}
                                </div>
                            </div>
                            <div className="column">
                                <div className="links">
                                    <h3 className='mb-2'>Running</h3>
                                    {sportMegaMenu.running.map((link, index) => (
                                        <a href='#' key={index}>{link}</a>
                                    ))}
                                </div>
                                <div className="links">
                                    <h3 className='mb-2'>Golf</h3>
                                    {sportMegaMenu.golf.map((link, index) => (
                                        <a href='#' key={index}>{link}</a>
                                    ))}
                                </div>
                            </div>
                            <div className="links">
                                <h3 className='mb-2'>Soccer</h3>
                                {sportMegaMenu.soccer.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                            <div className="links">
                                <h3 className='mb-2'>More Sports</h3>
                                {sportMegaMenu.moreSports.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </nav>
        <div className={`overlay ${sidebarOpen ? 'show' : ''}`} onClick={() => setSidebarOpen(false)}></div>
        
        <aside className={`${sidebarOpen ? 'show' : ''}`}>
            <button className="exit absolute top-5 right-5" onClick={toggleSidebar}>
                <i className='bi bi-x'></i>
            </button>

            <div className={`home ${categorySubView !== null ? 'slide' : ''}`}>
                <div className="categories">
                    {navbarCategories.map((category, index) => (
                        <button key={index} onClick={() => setCategorySubView(index)}>
                            {category}
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                        </button>
                    ))}
                </div>

                <div className='sub-brands'>
                    <div className='brand'>
                        <img src={jordanLogo} alt='Jordan' />
                        Jordan
                    </div>
                    <div className='brand'>
                        <img src={converseLogo} alt='Converse' />
                        Converse
                    </div>
                </div>

                <div className='join-sign'>
                    <span>Become a Nike Member for the best products, inspiration and stories in sport. <span>Learn more</span></span>
                    <div>
                        <button className='join'>Join Us</button>
                        <button className="sign">Sign In</button>
                    </div>
                </div>

                <div className='bottom-links'>
                    {sidebarBottomLinks.map((icon, index) => (
                        <a href='#' key={index}>
                            {icon.svg}
                            {icon.name}
                        </a>
                    ))}
                </div>
            </div>

            
            <div className={`category-sub-view ${categorySubView !== null ? 'show' : ''} ${innerCategorySubView !== null ? 'slide' : ''}`}>
                <button className='back' onClick={() => setCategorySubView(null)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
                    All
                </button>

                {categorySubView === 0 &&
                    <div className='category'>
                        <h3 className='mb-3'>New</h3>
                        <div className="links">
                            {Object.keys(newMegaMenu).map((category, index) => (
                                
                                <a href='#' key={index} onClick={() => setInnerCategorySubView(index)}>
                                    {category === 'shopNew' ? 'Shop New' : category.charAt(0).toUpperCase() + category.slice(1)}
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                                </a>
                            ))}
                        </div>
                    </div>
                }
                {categorySubView === 1 &&
                    <div className='category'>
                        <h3 className='mb-3'>Men</h3>
                        <div className="links">
                            {Object.keys(menMegaMenu).map((category, index) => (
                                <>
                                    {index !== 0 &&
                                        <a href='#' key={index} onClick={() => setInnerCategorySubView(index)}>
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                                        </a>
                                    }
                                </>
                            ))}
                        </div>
                    </div>
                }
                {categorySubView === 2 &&
                    <div className='category'>
                        <h3 className='mb-3'>Women</h3>
                        <div className="links">
                            {Object.keys(womenMegaMenu).map((category, index) => (
                                <>
                                    {index !== 0 &&
                                        <a href='#' key={index} onClick={() => setInnerCategorySubView(index)}>
                                            {category === 'shopByColor' ? 'Shop by Color' : category.charAt(0).toUpperCase() + category.slice(1)}
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                                        </a>
                                    }
                                </>
                            ))}
                        </div>
                    </div>
                }
                {categorySubView === 3 &&
                    <div className='category'>
                        <h3 className='mb-3'>Kids</h3>
                        <div className="links">
                            {Object.keys(kidsMegaMenu).map((category, index) => (
                                <>
                                    {index !== 0 && index !== 1 && index !== 3 &&
                                        <a href='#' key={index} onClick={() => setInnerCategorySubView(index)}>
                                            {category === 'allShoes' ? 'Shoes' : category === 'allClothing' ? 'Clothing' : category === 'shopBySport' ? 'Shop by Sport' : category.charAt(0).toUpperCase() + category.slice(1)}
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                                        </a>
                                    }
                                </>
                            ))}
                        </div>
                    </div>
                }
                {categorySubView === 4 &&
                    <div className='category'>
                        <h3 className='mb-3'>Jordan</h3>
                        <div className="links">
                            {Object.keys(jordanMegaMenu).map((category, index) => (
                                <>
                                    {index !== 0 && index !== 1 &&
                                        <a href='#' key={index} onClick={() => setInnerCategorySubView(index)}>
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                                        </a>
                                    }
                                </>
                            ))}
                        </div>
                    </div>
                }
                {categorySubView === 5 &&
                    <div className='category'>
                        <h3 className='mb-3'>Sport</h3>
                        <div className="links">
                            {Object.keys(sportMegaMenu).map((category, index) => (
                                <>
                                    <a href='#' key={index} onClick={() => setInnerCategorySubView(index)}>
                                        {category === 'moreSports' ? 'More Sports' : category.charAt(0).toUpperCase() + category.slice(1)}
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                                    </a>
                                </>
                            ))}
                        </div>
                    </div>
                }
            </div>

            <div className={`inner-category-sub-view ${innerCategorySubView !== null ? 'show' : ''}`}>
                <button className='back' onClick={() => setInnerCategorySubView(null)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
                    {categorySubView === 0 ? 'New' : null}
                    {categorySubView === 1 ? 'Men' : null}
                    {categorySubView === 2 ? 'Women' : null}
                    {categorySubView === 3 ? 'Kids' : null}
                    {categorySubView === 4 ? 'Jordan' : null}
                    {categorySubView === 5 ? 'Sport' : null}
                </button>
                <div style={{ display: categorySubView === 0 ? 'block' : 'none'}}>
                    {innerCategorySubView === 0 &&
                        <div className="category">
                            <h3 className='mb-3'>Featured</h3>
                            <div className='links'>
                                {newMegaMenu.featured.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 1 &&
                        <div className="category">
                            <h3 className='mb-3'>Shop New</h3>
                            <div className='links'>
                                {newMegaMenu.shopNew.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 2 &&
                        <div className="category">
                            <h3 className='mb-3'>Trending</h3>
                            <div className='links'>
                                {newMegaMenu.trending.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                </div>
                <div style={{ display: categorySubView === 1 ? 'block' : 'none'}}>
                    {innerCategorySubView === 1 &&
                        <div className="category">
                            <h3 className='mb-3'>Shoes</h3>
                            <div className='links'>
                                {menMegaMenu.shoes.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 2 &&
                        <div className="category">
                            <h3 className='mb-3'>Clothing</h3>
                            <div className='links'>
                                {menMegaMenu.clothing.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 3 &&
                        <div className="category">
                            <h3 className='mb-3'>Accessories</h3>
                            <div className='links'>
                                {menMegaMenu.accessories.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                </div>
                <div style={{ display: categorySubView === 2 ? 'block' : 'none'}}>
                    {innerCategorySubView === 1 &&
                        <div className="category">
                            <h3 className='mb-3'>Shop by Color</h3>
                            <div className='links'>
                                {womenMegaMenu.shopByColor.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 2 &&
                        <div className="category">
                            <h3 className='mb-3'>Shoes</h3>
                            <div className='links'>
                                {womenMegaMenu.shoes.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 3 &&
                        <div className="category">
                            <h3 className='mb-3'>Clothing</h3>
                            <div className='links'>
                                {womenMegaMenu.clothing.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 4 &&
                        <div className="category">
                            <h3 className='mb-3'>Accessories</h3>
                            <div className='links'>
                                {womenMegaMenu.accessories.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                </div>
                <div style={{ display: categorySubView === 3 ? 'block' : 'none'}}>
                    {innerCategorySubView === 2 &&
                        <div className="category">
                            <h3 className='mb-3'>Shoes</h3>
                            <div className='links'>
                                {kidsMegaMenu.shoesByAge.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                                {kidsMegaMenu.allShoes.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 4 &&
                        <div className="category">
                            <h3 className='mb-3'>Clothing</h3>
                            <div className='links'>
                                {kidsMegaMenu.clothingByAge.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                                {kidsMegaMenu.allClothing.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 5 &&
                        <div className="category">
                            <h3 className='mb-3'>Accessories</h3>
                            <div className='links'>
                                {kidsMegaMenu.accessories.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 6 &&
                        <div className="category">
                            <h3 className='mb-3'>Shop by Sport</h3>
                            <div className='links'>
                                {kidsMegaMenu.shopBySport.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                </div>
                <div style={{ display: categorySubView === 4 ? 'block' : 'none'}}>
                    {innerCategorySubView === 2 &&
                        <div className="category">
                            <h3 className='mb-3'>Men</h3>
                            <div className='links'>
                                {jordanMegaMenu.men.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 3 &&
                        <div className="category">
                            <h3 className='mb-3'>Women</h3>
                            <div className='links'>
                                {jordanMegaMenu.women.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 4 &&
                        <div className="category">
                            <h3 className='mb-3'>Kids</h3>
                            <div className='links'>
                                {jordanMegaMenu.kids.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 5 &&
                        <div className="category">
                            <h3 className='mb-3'>Accessories</h3>
                            <div className='links'>
                                {jordanMegaMenu.accessories.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                </div>
                <div style={{ display: categorySubView === 5 ? 'block' : 'none'}}>
                    {innerCategorySubView === 0 &&
                        <div className="category">
                            <h3 className='mb-3'>Basketball</h3>
                            <div className='links'>
                                {sportMegaMenu.basketball.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 1 &&
                        <div className="category">
                            <h3 className='mb-3'>Running</h3>
                            <div className='links'>
                                {sportMegaMenu.running.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 2 &&
                        <div className="category">
                            <h3 className='mb-3'>Soccer</h3>
                            <div className='links'>
                                {sportMegaMenu.soccer.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 3 &&
                        <div className="category">
                            <h3 className='mb-3'>More Sports</h3>
                            <div className='links'>
                                {sportMegaMenu.moreSports.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 4 &&
                        <div className="category">
                            <h3 className='mb-3'>Training</h3>
                            <div className='links'>
                                {sportMegaMenu.training.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                    {innerCategorySubView === 5 &&
                        <div className="category">
                            <h3 className='mb-3'>Golf</h3>
                            <div className='links'>
                                {sportMegaMenu.golf.map((link, index) => (
                                    <a href='#' key={index}>{link}</a>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </aside>

        <div className={`search-view px-4 py-2 ${showSearchView ? 'show' : ''}`}>
            <div className="top">
                <img src={nikeLogo} alt='Logo' />
                <div className='input-wrapper'>
                    <div className='icon'>
                        {navbarIcons.map((icon, index) => (
                            icon.name === 'search' ? (
                                <div key={index}>{icon.svg}</div>
                            ) : null
                        ))}
                    </div>
                    <input type='text' placeholder='Search' value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} />
                </div>
                <button className='cancel' onClick={handleCancelShowSearchView}>Cancel</button>
            </div>
            <div className='popular-terms'>
                <p>Popular Search Terms</p>
                <div className='terms'>
                    {searchTerms.map((term, index) => (
                        <button className='term' key={index} onClick={() => setSearchInputValue(term)}>{term}</button>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}