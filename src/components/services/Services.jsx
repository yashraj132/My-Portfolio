import React from 'react'
import './services.css'
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';

const data = [
  {
    id: 1,
    image: Image3,
    title: "Data Analytics",
    description:
      "Skilled in MS Excel, SQL and PowerBI. Having a great skills in Analytics, experienced with working in several analytic tools.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Aspiring developer, aquinted skills in MERN stack. Have some good projects in ReactJS, NodeJS and some CSS Frameworks.",
  },
  {
    id: 3,
    image: Image1,
    title: "Data Visualization",
    description:
      "Learning PowerBI and creating dashboards for the analytics of huge data. Have some dashboard projects in PowerBI.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section_title">Services</h2>
      <div className="services_container grid">
        {data.map(({id, image, title, description}) => {
        return(
          <div className="services_card" key={id}>
            <img src={image} alt="" className='services_img'/>
            <h3 className="services_title">{title}</h3>
            <p className="services_description">{description}</p>
          </div>
        )
      })}
      </div>
    </section>
  )
}

export default Services
