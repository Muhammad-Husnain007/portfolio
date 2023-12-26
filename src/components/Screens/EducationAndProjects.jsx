import React from 'react'
import './style.education.css'
import pizza from '../../assets/pizza.jpg'
import olx from '../../assets/olx.jpg'

const EducationAndProjects = () => {
  return (
    <div className='educationDiv'>
      <div className='div1'>
        <span className='educationSpan'>Education</span>
        <div className='education'>
          <div className='matric'>
            <span>Education</span>
            <p>I passed my Matric exams in May <br /> 2023 from  the Board of Secondary Education Karachi, and
              now I am studying in the
              11th grade in the field  of Computer Science at <br />
              Adamjee Government  Science <br /> College.</p>
          </div>
          <div className='inter'>
            <span>Full Stack Development</span>
            <p>I completed a course in Web and Mobile App Development from Jawan Pakistan's
              platform in December <br /> 2023,  where I acquired skills in <br />
              both  web development and mobile application development.
            </p>
          </div>
        </div>
      </div>
      <div className='div2'>
        <span className='projectSpan'>Projects</span>
        <div className='projects'>
          <div className='project1'>
          <img style={{width: 400, height: 250}} src={pizza} alt="" />
          </div>
          <div className='project2'>
          <img style={{width: 400, height: 250}} src={olx} alt="" />

          </div>

        </div>
      </div>
    </div>
  )
}

export default EducationAndProjects
