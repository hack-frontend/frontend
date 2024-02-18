import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
export default function Timer({ timerAppear }) {
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    let timerId;
    if (timer !== 0 && timerAppear)
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
      letterSpacing="15px"
      fontSize="13rem"
    >
      {minute}:{seconds < 10 ? `0${seconds}` : seconds}
    </Text>
  );
}