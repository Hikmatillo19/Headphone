import React from 'react'
import './Subscribe.scss'
function Subscribe() {
    return (
        <section className='container subscribe__cm'>
            <i className='left_noteB'><i className="bi bi-music-note-beamed"></i></i>
            <i className='left_noteS'><i class="bi bi-music-note"></i></i>
            <i className='left_noteBS'><i class="bi bi-music-note-beamed"></i></i>
            <div className="subscribe">
                <h4>Subscribe</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <label htmlFor="/">
                    <input type="text" placeholder='Enter Your email address' /><br />
                    <button>Subscribe</button>
                </label>
            </div>
            <i className='right_noteS'><i class="bi bi-music-note"></i></i>
            <i className='right_noteB'><i class="bi bi-music-note-beamed"></i></i>
        </section>
    )
}

export default Subscribe