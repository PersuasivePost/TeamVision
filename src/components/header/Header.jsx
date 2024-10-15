// header.jsx
import './Header.css';

export default function Header({ onNavClick }) {
    return (
        <div className="header">
            <div className="container">
                <nav className='navbar'>
                    <div className='vis'>
                        <a className='logo-link'>
                            <img src={`${process.env.PUBLIC_URL}/vision.jpeg`} alt="Team Vision Logo" />

                            {/* <img src={`${process.env.PUBLIC_URL}/vision.jpeg`} alt="description" /> */}
                        </a>
                        <h1 className='header-title'>Team Vision</h1>
                    </div>
                    <div>
                        <ul className="nav-links">
                            <li>
                                <a href='#' className='nav-item' onClick={() => onNavClick('home')}>Home</a>
                            </li>
                            <li>
                                <a href='#about-us' className='nav-item' onClick={() => onNavClick('about')}>About Us</a>
                            </li>
                            <li>
                                <a href='#upcoming-events' className='nav-item' onClick={() => onNavClick('events')}>Upcoming Events</a>
                            </li>
                            <li>
                                <a href='#learn-from-us' className='nav-item'>Learn From Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
