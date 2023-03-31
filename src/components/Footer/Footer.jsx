import React from 'react'
import './Footer.scss'
import logo from '../../assets/img/blogo.svg'

function Footer() {
    return (
        <footer className='footer_bg'>
            <div className='container footer'>
                <img src={logo} alt="" />
                <ul className='footList'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Product</li>
                </ul>
                <ul className='netList'>
                    <li><i class="bi bi-instagram"></i></li>
                    <li><i class="bi bi-twitter"></i></li>
                    <li><i class="bi bi-facebook"></i></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer