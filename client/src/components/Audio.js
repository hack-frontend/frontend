import React, { useRef, useState, useEffect } from 'react';

function Audio({ play }) {
  const music = ['audio/1.mp3','audio/2.mp3','audio/3.mp3', 'audio/4.mp3', 'audio/5.mp3'];

  const [src, setSrc] = useState(music[Math.floor(Math.random() * music.length)]);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = document.getElementById('myAudio');
    audioRef.current = audio;
    Type(play);
  }, []);


  const Type = (start) => {
    if (start === 'start') {
      audioRef.current.play();
    } else {
      //reset time to get data
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