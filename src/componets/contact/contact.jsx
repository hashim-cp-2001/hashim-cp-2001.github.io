import React from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { CgInstagram } from 'react-icons/cg';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6t4huir', 'template_hsdugs7', form.current, 'jnY4E1MS4_EAO45of')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__options-icon' />
            <h4>Gmail</h4>
            <h5>hashimsharaf999@gmail.com</h5>
            <a href="https://mail.google.com/mail">Send a message</a>
          </article>
          <article className='contact__option'>
            <CgInstagram className='contact__options-icon' />
            <h4>Instagram</h4>
            <h5>hash.im___</h5>
            <a href="https://www.instagram.com/hash.im__" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__options-icon' />
            <h4>Whatsapp</h4>
            <h5>9539770488</h5>
            <a href="https://api.whatsapp.com/send?+919539770488">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
