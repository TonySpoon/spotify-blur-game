import './App.css'

function App() {
  return (
    <div> 
      <h1>Coverdle</h1>

      <div className="album-container">
        <img 
          src="/FeedbackerImg.jpg"
          alt="Album Cover"
          className="album-cover"
        />  
      </div>

      <div className="guess-container">
        <input type="text" placeholder="Enter your guess..." className="guess-input" />
        <button className="guess-button">Guess</button>
      </div>

    </div>
  )
}

export default App;
