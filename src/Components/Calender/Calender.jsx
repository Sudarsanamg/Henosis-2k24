import React from 'react'

import './Calender.css'
import CountdownTimer from './CountdownTimer'
const Calender = () => {
    const targetDate = new Date('2024-03-01T12:00:00');
  return (
    <div className="container">
       <div className="col-6">
        <p className='h1 gradient-text'>Mark Your</p>
        <span className='gradient-text h1'>Calender</span>
        <p className='info'>Join us at the forefront of technological advancements and gain valuable insights at our upcoming technical symposium Henosis 2024 !</p>
       </div>
       <div className="col-6">
       <CountdownTimer targetDate={targetDate} />
       </div>
    </div>
  )
}

export default Calender