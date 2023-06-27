import React from 'react'
import './Meme.css'
import memesData from '../assets/memesData.js'

function Meme() {
    const [allMemeImages, setAllMemeImage] = React.useState(memesData)
    const generateMeme = () => {
        const memes = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memes.length)
        const { url } = memes[randomNumber]
        return url
    }
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: generateMeme()
    })

    const getMemeImage = () => {
        setMeme(prev => ({
            ...prev,
            randomImage: generateMeme()
        }))
    }

    function handleTextChange(event) {
        const {name, value} = event.target
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return(
        <main className='main'>
            <div className='form'>
                <input
                    className='form__text'
                    type="text"
                    name="topText" 
                    id="topText" 
                    placeholder='Top text'
                    value={meme.topText} 
                    onChange={handleTextChange}/>
                <input 
                    className='form__text'
                    type="text" 
                    name="bottomText" 
                    id="bottomText" 
                    placeholder='Bottom text'
                    value={meme.bottomText}
                    onChange={handleTextChange}/>
                <button 
                    className='form__btn'
                    onClick={getMemeImage}
                >Get a new meme image 🖼</button>
            </div>
            <div className='meme'>
                <img className='meme__image' src={meme.randomImage} alt='Meme image' />
                <p className='meme__text meme__text--top'>{meme.topText}</p>
                <p className='meme__text meme__text--bottom'>{meme.bottomText}</p>
            </div>
            
        </main>
    )
}

export default Meme