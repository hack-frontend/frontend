import { Center, Button, Link, Text } from "@chakra-ui/react";
import Btn from "../components/Btn";
import Timer from "./Timer";
import { useState, useEffect } from "react";

function BtnPage() {
  const [btnPresent, setBtnPresent] = useState(true);
  const [textAppear, setTextAppear] = useState(false);
  const [timerAppear, setTimerAppear] = useState(false);
  const onButtonClick = () => {
    setBtnPresent(false);
    setTimeout(() => {
      setTextAppear(true);
    }, 2000);
  };
  useEffect(() => {
    let timeout;
    if (textAppear)
      timeout = setTimeout(() => {
        setTextAppear(false);
        setTimeout(() => {
          setTimerAppear(true);
        }, 2000);
      }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [textAppear]);
  return (
    <Center minH={"100vh"} bg="green.200">
      <Btn
        btnPresent={btnPresent}
        onButtonClick={onButtonClick}
        textAppear={textAppear}
        timerAppear={timerAppear}
      />
      <Text
        opacity={textAppear ? "1" : "0"}
        visibility={textAppear ? "visible" : "hidden"}
        position={textAppear ? "relative" : "fixed"}
        transition="all 1s"
      >
        Be good to yourself.
      </Text>
      <Timer timerAppear={timerAppear} />
    </Center>
  );
}

export default BtnPage;