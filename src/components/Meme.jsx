import React from 'react'
import './Meme.css'
import memesData from '../assets/memesData.js'

function Meme() {
    const generateMeme = () => {
        const memes = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memes.length)
        const { url } = memes[randomNumber]
        return url
    }
    const [memeImage, setMemeImage] = React.useState(generateMeme())

    const handleOnClick = () => {
        const memes = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memes.length)
        const { url } = memes[randomNumber]
        
        setMemeImage(url)
    }


    return(
        <main className='main'>
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
                <button 
                    className='form__btn'
                    onClick={handleOnClick}
                >Get a new meme image 🖼</button>
            </div>
            <img className='meme-image' src={memeImage} alt='Meme image' />
        </main>
    )
}

export default Meme