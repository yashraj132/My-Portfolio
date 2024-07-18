import React from 'react'
import "./home.css"
import Me from "../../assets/profile.jpg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className='home_img' />
        <h1 className="home_name">Yash Raj Pandey</h1>
        <span className="home_education">Student at NIT Durgapur</span>

        <HeaderSocials />

        <a href="#contact" className='btn'>Hire Me</a>

        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home
