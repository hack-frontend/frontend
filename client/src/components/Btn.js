import { Button } from "@chakra-ui/react";

export default function Btn({
  textAppear,
  btnPresent,
  onButtonClick,
  timerAppear,
}) {
  return (
    <Button
      display="block"
      borderRadius="full"
      h="21rem"
      w="19rem"
      fontWeight="light"
      boxSizing="content-box"
      fontSize="2rem"
      bgColor="green.200"
      borderColor="white"
      border="3px solid"
      color="white"
      opacity={btnPresent ? "1" : "0"}
      visibility={btnPresent ? "visible" : "hidden"}
      position={!textAppear && !timerAppear ? "relative" : "absolute"}
      transition="all 1s"
      zIndex="10"
      onClick={onButtonClick}
      _hover={{
        bgColor: "green.300",
        borderColor: "green.300",
        animation: "pulse",
        animationDuration: "2s",
        animationIterationCount: "infinite",
      }}
    >
      Breathe
    </Button>
  );
}
