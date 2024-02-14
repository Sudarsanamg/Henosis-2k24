import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Navbar from './Components/Nav-bar/Navbar'
import Accordian from './Components/Accordian/Accordian';
import PricePanel from './Components/PricePanel/PricePanel';

function App() {

  return (
    <div>
      <PricePanel />
     
    </div>
  )
}

export default App
