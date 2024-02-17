import { Box,Button as Btn, Center} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import Timer from './Timer';

const Button = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [showTimer, setShowTimer] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(false);
  }

  useEffect(() => {
    let fadeTimer;

    if (!isVisible) {
      // Gradually decrease opacity every 100 milliseconds
      fadeTimer = setInterval(() => {
        setOpacity((prevOpacity) => Math.max(0, prevOpacity - 0.05));
      }, 100);

      // Clear the timer after 2 seconds (adjust as needed)
      setTimeout(() => {
        clearInterval(fadeTimer);
        setShowTimer(true);
      }, 5000);
    }

    return () => clearInterval(fadeTimer); // Cleanup the timer on component unmount
  }, [isVisible]);

  return (
    <Center backgroundColor={"green.200"} h='100vh'>
      <Box
        transition='opacity 5s ease-in-out' // Smoother transition for the entire component
        opacity={isVisible ? 1 : 0} // Set opacity dynamically
        pointerEvents={isVisible ? 'auto' : 'none'} // Disable pointer events when invisible
      >
        {isVisible ? (
          <Btn
            bgColor='#48BB78'
            borderRadius='full'
            size='lg'
            height="250px"
            width="250px"
            onClick={handleButtonClick}
            transition='opacity 3s'
          >
            Breathe
          </Btn>
        ) : (
          <Box>
            <h1>Take some deep breathes</h1>
          </Box>
        )}
      </Box>
      {showTimer && <Timer />}
    </Center>
  );
};

export default Button;