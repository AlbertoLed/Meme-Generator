import React from 'react'
import './Meme.css'

function Meme() {

    React.useEffect(() => {
        async function getData() {
            const result = await fetch('https://api.imgflip.com/get_memes')
            const data = await result.json()
            setAllMemeImage(data.data.memes)
        }
        getData()
    }, [])

    const [allMemeImages, setAllMemeImage] = React.useState([])
    const generateMeme = () => {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const { url } = allMemeImages[randomNumber]
        return url
    }
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
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