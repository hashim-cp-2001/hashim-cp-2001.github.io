import React from 'react'
import './experince.css'
import {CiBookmarkCheck } from 'react-icons/ci'
const experince = () => {
  return (
    <section id='experince'>
      <h5>What Skill I Have</h5>
      <h2>My Experince</h2>

      <div className='container experience__container'>
        <div className='experince__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experince__details'>
              <CiBookmarkCheck className='experince__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experince__details'>
              <CiBookmarkCheck className='experince__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermideate</small>
              </div>
            </article>
            <article className='experince__details'>
              <CiBookmarkCheck className='experince__details-icon'/>
             <div>
             <h4>JavaScript</h4>
              <small className='text-light'>Beginner</small>
             </div>
            </article>
            <article className='experince__details'>
              <CiBookmarkCheck className='experince__details-icon'/>
             <div>
             <h4>React</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>

          </div>

        </div>
        {/* END OF FRNTEND */}
        <div className='experince__backend'>
        <h3>Backend Development</h3>
        <div className='experience__content'>
            <article className='experince__details'>
              <CiBookmarkCheck className='experince__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experince__details'>
              <CiBookmarkCheck className='experince__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experinced</small>
              </div>
            </article>
            <article className='experince__details'>
              <CiBookmarkCheck className='experince__details-icon'/>
             <div>
             <h4>Node JS</h4>
              <small className='text-light'>Beginner</small>
             </div>
            </article>
            <article className='experince__details'>
              <CiBookmarkCheck className='experince__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

          </div>
          
        </div>
        
      </div>
    </section >
  )
}

export default experince