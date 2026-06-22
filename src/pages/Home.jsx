import React from 'react'
import './Home.css'
import profileImage from '../assets/John_casual_chatgpt3.png'

const Home = () => {
  return (
    <div className='hero__section'>
        <div className='hero_left'>
            <div className='title'>
                <span className='name'>Hi, I'm <br/>John Balasing</span>
                Frontend <br/> Developer <br/>
                <span className='title__part2'>UI/UX <br/> Enthusiast</span>
            </div>
        </div>
        <div className='hero_right'>
            <img src={profileImage} alt="John" />
        </div>
    </div>
  )
}

export default Home