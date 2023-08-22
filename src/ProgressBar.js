import React, { useEffect, useState } from 'react'
import './App.css'
import {Min, Max} from './constants'

const ProgressBar = ({value = 0}) => {
      const [percent, setPercent] = useState(value);
      
      useEffect(() => {
            setPercent(Math.min(Max, Math.max(value, Min)))
      }, [value])
  return (
    <div className='progress'>
      <span style={{color: percent > 49 ? "white" : "black"}} >{percent.toFixed()}%</span>
      {/* <div style={{width: `${percent}%`}}/> */}
      <div 
      
      // style={{width: `${percent}%`}}
      style={{
            transform: `scaleX(${percent / Max})`,
            transformOrigin: "left"
      }}
      
      
      role="progressbar"
      aria-valuemin={Min}
      aria-valuemax={Max}
      aria-valuenow={percent.toFixed()}
      />
    </div>
  )
}

export default ProgressBar;