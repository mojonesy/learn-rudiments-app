import logo from './assets/paradiddlevector.png';
import './Nav.css';

export default function Nav() {

    const handleClick = () => {
        const nav = document.querySelector(".nav");
        const expanded = nav.getAttribute("aria-expanded");

        document.body.classList.toggle("nav-open");
        if (expanded === "false") {
            nav.setAttribute("aria-expanded", true);
        } else {
            nav.setAttribute("aria-expanded", false);
        }
    }

    return (
        <header className='header'>
            <img src={logo} alt='paradiddle logo' className='logo'></img>

            <button 
                className='nav-toggle' 
                aria-label='toggle nav' 
                aria-controls='nav'
                onClick={handleClick}>
                <span className='hamburger'></span>
            </button>

            <nav id='nav' className='nav' aria-expanded='false'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <a href='#home' className='nav__link'>Home</a>
                    </li>
                    <li className='nav__item'>
                        <a href='#about' className='nav__link'>About the rudiments</a>
                    </li>
                    <li className='nav__item'>
                        <a href='#library' className='nav__link'>Library</a>
                    </li>
                    <li className='nav__item'>
                        <a href='#resources' className='nav__link'>Resources</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}