import React, { useState } from 'react'
import Audio from '../components/Audio'
function Button() {
  const [make, setMake] =  useState(false);



  return (
    
    <div>
      {make && <Audio play = 'start'/>}
      <button onClick ={()=> setMake(true)}>
         cool
      </button>
    </div>
    
  )
}

export default Button