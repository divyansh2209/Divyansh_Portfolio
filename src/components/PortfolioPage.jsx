import React from 'react'
import About from './About'
import Experience from './Experience'
import Tech from './Tech'
import Works from './Works'
import Contact from './Contact'
import Portfolio from './portfolio/Portfolio';

const PortfolioPage = () => {
    return (
        <div>
            <Works />
            <Experience />
            <Tech />
            <Contact/>
        </div>
    )
}

export default PortfolioPage