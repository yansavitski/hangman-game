import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/api/v1/start-game');
  }, [])

  return (
    <div className="App">
      Hangman
    </div>
  );
}

export default App;
