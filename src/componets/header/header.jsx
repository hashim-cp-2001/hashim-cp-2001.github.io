import React, { useState, useEffect } from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocial from './headersocial';

const Header = () => {
  const [start, setStart] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const dynamicStart = 'Hello I Am';
    const dynamicName = 'Hashim Sharaf CP';
    const dynamicRole = 'Fullstack Developer';

    const writeText = (text, setText) => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex === text.length) {
          clearInterval(interval);
        } else {
          setText((prevText) => prevText + text[currentIndex]);
          currentIndex++;
        }
      }, 100); // Adjust the interval delay as needed
    };

    setStart('');
    setName('');
    setRole('');

    setTimeout(() => {
      writeText(dynamicStart, setStart);
    }, 100); // Delay writing "Hello i am"

    setTimeout(() => {
      writeText(dynamicName, setName);
    }, 1500); // Delay writing "Hashim Sharaf CP"

    setTimeout(() => {
      writeText(dynamicRole, setRole);
    }, 3000); // Delay writing "Fullstack Developer"

  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5 className={start ? 'fade-in' : ''}>{start}</h5>
        <h1 className={name ? 'fade-in' : ''}>{name}</h1>
        <h5 className={role ? 'fade-in text-light' : 'text-light'}>{role}</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#Contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
