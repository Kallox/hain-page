import React from 'react';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Inicio/>
    </div>
  )
}

export default App;
