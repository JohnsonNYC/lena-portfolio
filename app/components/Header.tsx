import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components';
import { Menu } from 'lucide-react';
import {motion} from 'framer-motion';
import Text from './Text';

const Header = () => {
  const prevScrollPosRef = useRef(0);

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [showHeader, setShowHeader] = useState<boolean>(true);

  const handleBurgerClick = ():void => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleScroll = ():void => {
    const currentScrollPosition = window.scrollY;
    const isScrollingUp = prevScrollPosRef.current > currentScrollPosition;

    if(isScrollingUp)setIsDropdownOpen(false);

    setShowHeader(isScrollingUp || currentScrollPosition <= 0);
    prevScrollPosRef.current = currentScrollPosition;

  }

  const scrollToSection = (sectionId: string):void=> {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[prevScrollPosRef])

  return (
    <NavContainer initial={{y:'-100%', opacity: 0}} animate={{y: showHeader? 0: '-100%', opacity: showHeader? 1: 0}} transition={{type: 'spring', stiffness: 100, damping: 20, duration: 1}}>
      <div>
        <Text weight={900}>Lena Ink</Text>
        <Menu className='mobile-burger' onClick={handleBurgerClick}/>
      </div>
      <DropdownContainer initial={{height: 0}} animate={{height: isDropdownOpen? 'auto': '0'}}>
        <NavLink onClick={() => scrollToSection('about-me')}>About Me</NavLink>
        <NavLink onClick={() => scrollToSection('portfolio')}>Portfolio</NavLink>
        <NavLink onClick={() => scrollToSection('faq')}>FAQ</NavLink>
        <NavLink onClick={() => scrollToSection('guest-spots')}>Guest Spots</NavLink>
        <NavLink onClick={() => scrollToSection('consultation')}>Consultation</NavLink>
      </DropdownContainer>
    </NavContainer>
    )
    ;
}

export default Header;

const NavContainer = styled(motion.nav)`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background: white; 

  & > div:first-of-type{
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }

  .mobile-burger {
    display: block;
    margin-left: auto;
  }
`

const DropdownContainer = styled(motion.div)`
  overflow: hidden;
`

const NavLink = styled.div`
  border-bottom:1px solid var(--blue);
  padding: 1rem;
`