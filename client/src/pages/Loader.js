import { Center } from "@chakra-ui/react";
import { ClimbingBoxLoader } from "react-spinners";
export default function Loader() {
  return (
    <Center minH="100vh">
      <ClimbingBoxLoader color="#48BB78" size="30" />
    </Center>
  );
}
