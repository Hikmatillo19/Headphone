import React from 'react'
import './AboutHp.scss'
import batery from '../../assets/img/battery.svg'
import bluetooth from '../../assets/img/bluetooth.svg'
import mikrophone from '../../assets/img/mikrophone.svg'
import headphineYel from '../../assets/img/headphone__latest.png'
function AboutHp() {
    return (
        <section className='aboutHp container'>
            <div className='aboutHp__texts'>
                <h2 className='aboutHp__title'>Good headphones and loud music is all you need</h2>
                <ul className='chart_list'>
                    <li className='chart__item'>
                        <div className='chart'>
                            <span className='chartb'></span>
                            <span className="childdchart"><img src={batery} alt="" /></span>
                        </div>
                        <div className='chart__text'>
                            <h4>Battery</h4>
                            <p>Battery 6.2V-AAC codec</p>
                            <a href="/">Lern More</a>
                        </div>
                    </li>
                    <li className='chart__item'>
                        <div className='chart'>
                            <span className='chartb'></span>
                            <span className="childdchart"><img src={bluetooth} alt="" /></span>
                        </div>
                        <div className='chart__text'>
                            <h4>Bluetooth</h4>
                            <p>Battery 6.2V-AAC codec</p>
                            <a href="/">Lern More</a>
                        </div>
                    </li>
                    <li className='chart__item'>
                        <div className='chart'>
                            <span className='chartb'></span>
                            <span className="childdchart"><img src={mikrophone} alt="" /></span>
                        </div>
                        <div className='chart__text'>
                            <h4>Microphone</h4>
                            <p>Battery 6.2V-AAC codec</p>
                            <a href="/">Lern More</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='aboutHp__bgImg'>
                <div className='left'>
                    <div className="right">
                        <img src={headphineYel} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHp