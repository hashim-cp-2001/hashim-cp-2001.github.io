import React from 'react'
import './about.css'
import ME from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {CgCollage} from 'react-icons/cg'
import {MdFiberNew} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Know More</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about_me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about__card'>
              <CgCollage className='about__icon'/>
              <h5>B-tech</h5>
              <small>Computer Science</small>
            </article>  
           
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Projects</h5>
              <small>4+ completed</small>
            </article>
            
          </div>  
          <p>
          I Am Hashim Sharaf CP, and I am a dedicated student pursuing Computer Science at Govt Engineering College Idukki. With a passion for leadership, I thrive in roles where I can inspire and motivate others. Programming is a domain where I excel, and I am constantly honing my skills to stay updated with the latest technologies. I am eager to contribute to the field of technology and make a positive impact in the world.
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default About