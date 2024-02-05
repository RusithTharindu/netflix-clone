import './styles/header.css'
import Logo from '../assets/logo.png'

const Header = () => {
    return(
        <div className='netflix__header'>
            <div className='netflix__header-logo'>
                <div className='logo-netflix'>
                <img src={Logo} alt='logo'/>
                </div>
            </div>
            <div className='netflix__header-navlinks'>
                <a href="#home">Home</a>
                <a href="#browse">Browse</a>
                <a href="#popular">Popular</a>
                <a href="#About">About Us</a>
            </div>
            <div className="netflix__header-sign">
                <a href="#sign">Sign Up</a>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Header