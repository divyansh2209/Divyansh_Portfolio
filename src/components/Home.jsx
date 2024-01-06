import React from 'react'
import Hero from './Hero'
import About from './About'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <About></About>
            <div className='flex justify-center '>
                <button className='btn mb-20'>
                    <Link to='/portfolio'>Portfolio</Link>
                </button>
            </div>
        </div>
    )
}

export default Home