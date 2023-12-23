import React, {useState, useEffect} from 'react'
import './style.home.css'
import github from '../../assets/github.png'
import facebook from '../../assets/facebook.svg'
import linekin from '../../assets/linkedin.png'
import gmail from '../../assets/gmail.jpg'
import hiiHand from '../../assets/hiiHand.jpg'

const Home = () => {
  const [handAnimation, setHandAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHandAnimation((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='mainHome'>
      <div className='divLeft'>
      <span>
      Hi, I'm Husnain{' '}
      <img
        src={hiiHand}
        alt="hii"
        className={handAnimation ? 'waving-hand' : ''}
      />
    </span>
        <p>
        A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
        </p>
        <div className='socialImages'>
       <a href="https://github.com/Muhammad-Husnain007" target="_blank"><img src={github} alt="" /> </a>
       <a href="mailto:hasnainilyas007@gmail.com" target="_blank"> <img src={gmail} alt="" /> </a>
       <a href="https://www.linkedin.com/in/muhammad-husnain-617b5a282/" target="_blank"> <img src={linekin} alt="" /> </a>
       <a href="https://www.facebook.com/hasnai.khan.948" target="_blank"> <img src={facebook} alt="" /> </a>
        </div>
        <button>Contact Me</button>
      </div>
      <div className='divRight'></div>
    </div>
  )
}

export default Home
