import React, { useState, useEffect } from 'react'
import { RiMenu3Line,  RiCloseLine } from 'react-icons/ri';
import HamburgerMenu from 'react-hamburger-menu';
import logo from '../../assets/logo.svg'
import './navbar.css'


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const handleMenuToggle = () => {
      setToggleMenu(!toggleMenu);
    };
  

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
        <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>Home</p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      {isMobile && (
        <div className="gpt3_navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HamburgerMenu
              isOpen={toggleMenu}
              menuClicked={handleMenuToggle}
              width={20}
              height={15}
              strokeWidth={2}
              rotate={0}
              color="#fff"
              borderRadius={0}
              animationDuration={0.5}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#wgpt3">What is GPT3?</a>
                </p>
                <p>
                  <a href="#possibility">Open AI</a>
                </p>
                <p>
                  <a href="#features">Case Studies</a>
                </p>
                <p>
                  <a href="#blog">Library</a>
                </p>
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar