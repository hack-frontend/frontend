import React, { useRef, useEffect } from "react";

function Audio({ play, src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = document.getElementById("myAudio");
    audioRef.current = audio;
    Type(play);
  }, []);

  const Type = async (start) => {
    if (start === "start") {
      audioRef.current.play();
    } else if (start === "stop") {
      audioRef.current.volume = audioRef.current.volume * 0.9;
      for (let i = 0.9; i >= 0; i -= 0.1) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        audioRef.current.volume = audioRef.current.volume * i;
      }
      audioRef.current.pause();
    }
  };

  return (
    <div>
      <audio
        id="myAudio"
        controls
        onEnded={() => Type("stop")}
        style={{ display: "none" }}
      >
        <source src={src} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default Audio;
