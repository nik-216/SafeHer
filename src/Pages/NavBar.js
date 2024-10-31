//put all needed pics in public folder
//rfce
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
// import myIcon from './myIcon.svg';
import Login from './Login';


function NavBar() {
    const [click,setClick]=useState(false);
    // to update state of click
    const {isAuthenticated} = useAuth0();
    const { logout } = useAuth0();
    const { loginWithRedirect } = useNavigate('/Login');
    const [button,setButton]=useState(true);

    const handleClick=()=>setClick(!click);
    //toggles the state of click

    const closeMobileMenu=()=>setClick(false);

    //to check for resize of window
    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    },[])
    //so that signup button does not show up after resize and refresh in mobile ratio

    window.addEventListener('resize',showButton);
    //whenever window is resized you want show button to work

    return (
        <nav className="navbar">
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                <img src="safeher.jpg" className="logo"></img>
                    {/* <img src={myIcon} /> */}
                    {/* adds font awesome icon */}
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {/* hamburger menu using useState */}
                    <i className={click ? 'fa-solid fa-xmark' : 'fas fa-bars'}/>
                    {/* state click defined above */}
                </div>
                <ul className={click ?'nav-menu active' : 'nav-menu'}>
                    {/* for nav menu to disappear after selecting an option 
                    in mobile ratio*/}
                    
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Forum' className='nav-links' onClick={closeMobileMenu}>
                            Forum
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Lawyers' className='nav-links' onClick={closeMobileMenu}>
                            About our Legal Team
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Profile' className='nav-links' onClick={closeMobileMenu}>
                            Profile
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Login' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                </ul>
                {isAuthenticated ? (
              <Button
                onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </Button>
          ) : (
              <Button onClick={() => loginWithRedirect}>Log In</Button>
          )}
          </div>
        </nav>
    )
}

export default NavBar