import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'

const headersocial = () => {
  return (
    <div className='header__social'>
        <a href='https://linkedin.com/in/hashim-sharaf-a874161a3/' target='_blank'><FiLinkedin/></a>
        <a href='https://github.com/hashim-cp-2001' target='_blank'><FaGithub/></a>
        <a href='https://m.me/hashim.sharaf.35' target='_blank'><AiFillFacebook/></a>
    </div>
  )
}

export default headersocial