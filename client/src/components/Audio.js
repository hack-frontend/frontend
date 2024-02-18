import React, { useRef, useState, useEffect } from 'react';

function Audio({ play, src }) {
  
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = document.getElementById('myAudio');
    audioRef.current = audio;
    Type(play);
  }, []);


  const Type = (start) => {
    if (start === 'start') {
      audioRef.current.play();
    } else if(start == 'stop'){
        audioRef.current.currentTime = 0;
        audioRef.current.pause();
    }
    else{
        audioRef.current.currentTime = 0;
        audioRef.current.pause();
    }
  };

  return (
    <div>
      <audio id="myAudio" controls onEnded={() => Type('stop')} style = {{display:'none'}}>
        <source src={src} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default Audio;