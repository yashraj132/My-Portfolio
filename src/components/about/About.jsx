import React from 'react'
import './about.css'
// import Image from '../../assets/profile2.png';
import AboutBox from './AboutBox';

const About = () => {

  return (
      <section className="about container section" id="about">
      <h1 className="section_title">About Me</h1>
      <div className="about_container grid">
        {/* <img src={Image} alt="" className='about_img' /> */}
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I am Yash Raj Pandey, currently a B.Tech final year student from National Institute of Technology, Durgapur. I am an aspiring Full Stack Developer with having a good experience in working with React JS, Node JS, Mongo DB. Also, I have acquired skills in Data Analytics tools like MS Excel, SQL and PowerBI. 
            </p>
            <a href="https://drive.google.com/file/d/1cPY1CKP_SQNZANAeI3JPoYhMxaS31Ddt/view?usp=sharing" className='btn'>Download CV</a>
          </div>

          {/* Skills and Percentage  */}
          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Web Development</h3>
                <span className="skills_number">80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Data Analytics</h3>
                <span className="skills_number">75%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage data_analytics"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Competitive Programming</h3>
                <span className="skills_number">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage comp_pro"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox/>
      </section>
  )
}

export default About