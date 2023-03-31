import React from 'react'
import './Header.scss'
import logo from '../../assets/img/blogo.svg'
import bmenu from '../../assets/img/burgermenu.svg'
import headphone from '../../assets/img/headphone.png'
function Header() {
    return (
        <header>
            <nav className='header container'>
                <img src={logo} alt="" />
                <ul className='menu'>
                    <li><a href="/"><i className="bi bi-search"></i></a></li>
                    <span className='beforeafter'></span>
                    <li className='margin'><a href="/"><i className="bi bi-bag"></i></a></li>
                    <span className='beforeafter'></span>
                    <li><a href="/"><i className="bi bi-person"></i></a></li>
                </ul>
                <button className='burger__menu'>
                    <img src={bmenu} alt="" />
                </button>
            </nav>
            <div className='hero container'>
                <img src={headphone} alt="" />
                <div className='hero__text'>
                    <p>hear it. fell it</p>
                    <h2>move with the music</h2>
                    <span className='price__span'><h5>$435</h5> <h6>$465</h6></span>
                    <button className='buynow'>buy now</button>

                </div>
            </div>
        </header>
    )
}

export default Header