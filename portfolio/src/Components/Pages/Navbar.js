import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='nav'>
            <ul className='navul'>
                <Link to="/"><li className='li'>Login</li></Link>
                <Link to="/home"><li className='li'>Home</li></Link>
                <Link to="/personal-details"><li className='li'>personal details</li></Link>
                <Link to="/edu-details"><li className='li'>educational details</li></Link>
                <Link to="/skills"><li className='li'>skills</li></Link>
                <Link to="/projects"><li className='li'>projects done</li></Link>
                
            </ul>
        </div>
    )
}

export default Navbar