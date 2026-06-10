import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import './App.css'

function App() {

  const[blur, setBlur] = useState(50)
  const[guess, setGuess] = useState('')

  const BLURREDUCTION = 10

  const FADEDURATION = 2000

  const handleGuess = () => { //Handles logic for inputted guesses
    toast.dismissAll() //Dismisses any existing toasts before showing a new one
    if (guess.trim().toLowerCase() === '') { //If the user enters a blank guess, print an error message but do not reduce the blur
      toast.error('Please enter a guess before submitting.')
      return
    }

    if (guess.trim().toLowerCase() === 'feedbacker') { //If user guesses correctly, show a success message and end the game
      toast.success('Correct! The album is "Feedbacker" by Boris.')
      setBlur(0)
    } else { //If the guess is incorrect, handles game logic
      if (blur - BLURREDUCTION < 0) { //If the user has run out of attempts, show a game over message and end the game
        toast.error('Game over! You have run out of attempts.')
        setBlur(-1)
        
      } else { //If the user still has attempts left, show an error message and reduce the blur
        toast.error('Incorrect guess. Try again!')
        setBlur(blur - BLURREDUCTION)
      }
    }
    setGuess('')
  }

  return (
    <div> 
      <h1>Coverdle</h1>

      <Toaster 
        position="bottom-center"
        toastOptions={{ duration: FADEDURATION }}
       />

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
          disabled={blur<0}
          type="text" placeholder="Enter your guess..." 
          className="guess-input" />

        <button 
          disabled={blur<0}
          className="guess-button" 
          onClick={handleGuess}>Guess
        </button>
      </div>

    </div>
  )
}

export default App;
