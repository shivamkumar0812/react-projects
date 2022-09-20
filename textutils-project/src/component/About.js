import React from 'react'

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark'? 'white' : 'black',
    backgroundColor: props.mode === 'dark'? '#1d3c5a' : 'white'
  }
  return (
    <>
        <section className="about section" id="about" style={myStyle}>
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img className="about__img" src="assets/images/2.jpg" alt="about"/>
        <div className="about__data">
          <p className="about__description">Web Developer with extensive knowledge and years of experience, working in web
            technologies and Ui / Ux design, delivering quality work </p>
          <div className="about__info">

            <div>
              <span className="about__info-title">02+</span>
              <span className="about__info-name">years <br/> experience</span>
            </div>

            <div>
              <span className="about__info-title">08+</span>
              <span className="about__info-name">Completed <br/> Project</span>
            </div>

            <div>
              <span className="about__info-title">02+</span>
              <span className="about__info-name">Companies <br/> worked</span>
            </div>

          </div>
          <div className="about__buttons">
            <a download="" href="assets/pdf/Resume.pdf" className="button button--flex"><i
                className="uil uil-download-alt button__icon"></i>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
