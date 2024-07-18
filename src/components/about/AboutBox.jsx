import React from 'react'

const AboutBox = () => {
  return (
    <div className="about_boxes grid">
        <div className="about_box">
            <i className="about_icon icon-fire"></i>
            <div>
                <h3 className="about_title">300+</h3>
                <span className="about_subtitle">Problem Solved</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-star"></i>
            <div>
                <h3 className="about_title">2 Star</h3>
                <span className="about_subtitle">@CodeChef</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-cup"></i>
            <div>
                <h3 className="about_title">10+</h3>
                <span className="about_subtitle">Projects Done</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-trophy"></i>
            <div>
                <h3 className="about_title">2+ Years</h3>
                <span className="about_subtitle">Coding Experience</span>
            </div>
        </div>

    </div>
  )
}

export default AboutBox
