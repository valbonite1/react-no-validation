import React from 'react';
import './HeroSection.css';
import HeroSectionSvg from './HeroSectionSvg';

const HeroSection = () => {
    return(
        <>
            <div className="hero-section">
                <div className="hero-text">
                    <h1>Hi!</h1>
                    <h3>I am <span className="hi-lite">Val</span>.</h3>
                    <h5>Software Engineer Trainee | Frontend Developer</h5>
                </div>
                <div className="hero-img">  
                    <HeroSectionSvg className='hero-svg' alt='herosection' />
                </div>
            </div>
        </>
    );
}

export default HeroSection;