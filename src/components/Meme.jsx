import React from 'react'
import './Meme.css'

function Meme() {
    return(
        <main>
            <div className='form'>
                <input
                    className='form__text'
                    type="text"
                    name="" 
                    id="" 
                    placeholder='Top text' />
                <input 
                    className='form__text'
                    type="text" 
                    name="" 
                    id="" 
                    placeholder='Bottom text'/>
                <button className='form__btn'>Get a new meme image 🖼</button>
            </div>
        </main>
    )
}

export default Meme