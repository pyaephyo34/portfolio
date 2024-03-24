import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import ME2 from '../../assets/me2.jpg'
import ME3 from '../../assets/me3.jpg'
import './intro.css';
import Slider from '../slider/Slider';

const Intro = () => {
  const myimages = [ME, ME2,ME3];
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <Slider images={myimages} />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>13+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>Experienced IT professional with 13+ years specializing in ERP applications, SaaS, PaaS, chatbot development, and social monitoring tools. Currently a Technical Project Manager at Bagan Innovation Technology, adept at strategic oversight, project execution, and team leadership. Proven track record in driving innovation and achieving business objectives.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro