import React,{forwardRef} from 'react'

import './About.css'


const About = forwardRef((props, ref) => {
  return (
    <div className='about__container' ref={ref}>
        <div>
            <div>
                I'm a Frontend Developer and Technical Lead with 10+ years of experience in the IT industry,<br />
                specializing in building modern web applications and leading frontend development teams.
            </div>
            <br />
            <div>
                My primary expertise is in React.js, JavaScript, HTML5 and CSS3, with experience working on<br />
                enterprise applications, UI modernization and large-scale application migrations.
            </div>
            <br />
            <div>
                Beyond development, I enjoy working closely with cross-functional teams, understanding business requirements,<br />
                solving technical problems and helping teams deliver high-quality software.
            </div>
            <br />
            <div>
                I'm currently focused on deepening my expertise in frontend architecture, modern JavaScript,<br />
                CI/CD, cloud technologies and AI-powered development.
            </div>
        </div>
    </div>
  )
})

export default About