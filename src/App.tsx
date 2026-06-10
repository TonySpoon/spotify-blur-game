import { useState } from 'react';
import './App.css'

function App() {

  const[blur, setBlur] = useState(50)
  const[guess, setGuess] = useState('')

  const handleGuess = () => {
    if (guess.trim().toLowerCase() === '') {
      
      return
    }

    if (guess.toLowerCase() === 'feedbacker') {
      alert('Correct! The album is "Feedbacker" by Boris.')
    } else {
      setBlur(blur - 10)
    }
    setGuess('')
  }

  return (
    <div> 
      <h1>Coverdle</h1>

      <div className="album-container">
        <img 
          src="/FeedbackerImg.jpg"
          alt="Album Cover"
          className="album-cover"
          style={{ filter: `blur(${blur}px)` }}
        />  
      </div>

      <div className="guess-container">
        <input 
          value={guess} 
          onChange={(e) => setGuess(e.target.value)} 
          onKeyDown={(e) => e.key === 'Enter' && handleGuess()}
          type="text" placeholder="Enter your guess..." 
          className="guess-input" />

        <button 
          className="guess-button" 
          onClick={handleGuess}>Guess
        </button>
      </div>

    </div>
  )
}

export default App;
