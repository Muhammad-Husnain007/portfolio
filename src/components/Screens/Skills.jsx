import React from 'react'
import './style.skills.css'
import html5 from '../../assets/html5.webp'
import css3 from '../../assets/css3.webp'
import firebase from '../../assets/firebase.webp'
import js from '../../assets/js.webp'
import react from '../../assets/react.webp'
import node from '../../assets/node.webp'
import express from '../../assets/express.jpg'
import mongodb from '../../assets/mongodb.webp'
import redux from '../../assets/redux.png'

const Skills = () => {
  return (
    <div className='skillDiv'>
      <div className='mySkillsText'>
        <span>My Skills</span>
      </div>
      <div className='mySkills'>
        <div className='skills1'>
          <div className='skills'>
            <img style={{ width: 70, height: 70 }} src={html5} alt="" />
            <span>HTML</span>
          </div>
          <div className='skills'>
            <img style={{ width: 70, height: 70 }} src={css3} alt="" />
            <span>CSS</span>

          </div>
          <div className='skills'>
            <img style={{ width: 70, height: 70 }} src={firebase} alt="" />
            <span>FIREBASE</span>

          </div>
          <div className='skills'>
            <img style={{ width: 70, height: 70 }} src={js} alt="" />
            <span>JAVASCRIPT</span>

          </div>
          <div className='skills'>
            <img style={{ width: 70, height: 70 }} src={react} alt="" />
            <span>REACT JS</span>

          </div>
        </div>
        <div className='skills2'>
          <div className='skills'>
            <img style={{ width: 90, height: 60 }} src={node} alt="" />
            <span>NODE JS</span>

          </div>
          <div className='skills'>
  <img style={{ width: 100, height: 50, backgroundColor: 'transparent' }} src={express} alt="express" />
  <span>EXPRESS JS</span>
</div>
          <div className='skills'>
            <img style={{ width: 70, height: 70 }} src={mongodb} alt="" />
            <span>MONGO DB</span>

          </div>
          <div className='skills'>
            <img style={{ width: 70, height: 70 }} src={react} alt="" />
            <span>REACT NATIVE</span>

          </div>
          <div className='skills'>
            <img style={{ width: 70, height: 70 }} src={redux} alt="" />
            <span>REDUX</span>

          </div>
        </div>
        {/* <div className='skills'>

</div> */}

      </div>
    </div>
  )
}

export default Skills
