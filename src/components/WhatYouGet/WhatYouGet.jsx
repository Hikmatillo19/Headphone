import React from 'react'
import './WhatYouGet.scss'
import boxHeadphone from '../../assets/img/youGet_img.png'
import Aos from 'aos'
function WhatYouGet() {
    Aos.init()
    return (
        <section className='container whatGet'>
            <img src={boxHeadphone} alt="" />
            <div className='getText'>
                <h2>Whatever you get in the box</h2>
                <ul className='get__ist'>
                    <li className='get__ist_item' data-aos="flip-left">
                        {/* axerax  */}
                        <i className="bi bi-arrow-right-circle"></i>
                        5A Charger
                    </li>
                    <hr />
                    <li className='get__ist_item' data-aos="flip-right">
                        <i className="bi bi-arrow-right-circle"></i>
                        Extra battery
                    </li>
                    <hr />

                    <li className='get__ist_item' data-aos="flip-left">
                        <i className="bi bi-arrow-right-circle"></i>
                        Sophisticated bag
                    </li>
                    <hr />

                    <li className='get__ist_item' data-aos="flip-right">
                        <i className="bi bi-arrow-right-circle"></i>
                        User manual guide
                    </li>
                    <hr />

                </ul>
            </div>
        </section>
    )
}

export default WhatYouGet