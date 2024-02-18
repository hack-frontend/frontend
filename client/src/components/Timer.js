import { useState, useEffect } from "react";
import { Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Audio from "./Audio";
export default function Timer({ timerAppear }) {
  const [timer, setTimer] = useState(10);
  const navigate = useNavigate();
  const music = "audio/1.mp3";
  const [src, setSrc] = useState(music);
  useEffect(() => {
    let timerId;
    if (timer !== -1 && timerAppear)
      timerId = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    return () => clearInterval(timerId);
  }, [timer, setTimer, timerAppear]);
  const minute = Math.floor(timer / 60);
  const seconds = timer % 60;
  console.log(timerAppear);
  return (
    <Text
      transition="all 1s "
      opacity={timerAppear ? "1" : "0"}
      position={timerAppear ? "relative" : "absolute"}
      color="white"
      fontWeight="hairline"
      letterSpacing="15px"
      fontSize="8rem"
      display="flex"
      flexDir="column"
    >
      {timer === -1 && (
        <Button
          borderRadius="full"
          bg="green.200"
          border="1px solid"
          borderColor="white"
          color="white"
          fontSize="1.5rem"
          fontWeight="normal"
          p="3rem"
          _hover={{
            borderColor: "yellow.50",
            bgColor: "yellow.50",
            color: "green.300",
          }}
          onClick={() => navigate("/posts")}
        >
          Are you ready to reflect?
        </Button>
      )}
      {timer > -1 && `${minute}:${seconds < 10 ? "0" + seconds : seconds}`}
      {seconds < 10 && <Audio src={src} play="start" />}
      {timer <= 0 && <Audio src={src} play="stop" />}
    </Text>
  );
}
