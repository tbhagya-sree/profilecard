
import React from 'react'
import './App.css'
const App = () => {
  
  const yourName = "Bhagyasree";
  const yourAim = "To become a software Engineer";
  const funFact = "I can do coding for 3add hours without drinking water.";

  return (
    <div className="container">
      <div className="profile-card">
        <div className="girl">👩</div>
        <h1>Bhagyasree</h1>
        <h2> software Engineer </h2>
        <p className="fact-title">Fun Fact:</p>
        <p className="fact">I can do coding for 3 hours without drinking water.</p>
      </div>
    </div>
  )
}

export default App