import React, { useState, useEffect } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { RiServiceFill } from 'react-icons/ri';
import { Link } from 'react-scroll';
import { MdOutlinePermContactCalendar } from 'react-icons/md';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer;

    const handleMovement = () => {
      setIsVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    window.addEventListener('scroll', handleMovement);
    window.addEventListener('mousemove', handleMovement);

    return () => {
      window.removeEventListener('scroll', handleMovement);
      window.removeEventListener('mousemove', handleMovement);
    };
  }, []);

  return (
    <nav className={isVisible ? '' : 'hidden'}>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a
        href='#experince'
        onClick={() => setActiveNav('#experince')}
        className={activeNav === '#experince' ? 'active' : ''}
      >
        <BsBookmark />
      </a>
      <a
        href='#Contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <MdOutlinePermContactCalendar />
      </a>
    </nav>
  );
};

export default Nav;
