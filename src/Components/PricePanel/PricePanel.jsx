import React, { useEffect, useState } from 'react';
import './Pricepanel.css'
const PricePanel = () => {
  const [count, setCount] = useState(599900);
  const stopAt = 600000; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount + 1;
        if (newCount >= stopAt) {
          clearInterval(interval); 
          return stopAt; 
        }
        return newCount;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [stopAt]); 

  return (
    <div className="container">
        <div className="row">
      <p className='h1 text d-flex justify-content-center'>
        Register now to win an exciting prize pool worth  
      </p>
      </div>
      <div className="row">
        <div className="col">
            <div className='gradient-text'>
            <span className=' h1 d-flex justify-content-center  large'>&#8377;{count.toLocaleString()}</span>
            </div>
        

      </div>
      </div>
    </div>
  );
};

export default PricePanel;
