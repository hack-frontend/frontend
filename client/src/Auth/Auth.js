import { auth, googleProvider } from "../config/firebase.config";
import { signInWithPopup } from "firebase/auth";
import { Button, Center, Icon } from "@chakra-ui/react";
import { useContext } from "react";
import UserContext from "../store/user-context";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Auth() {
  const { setIsLoggedIn, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      const {
        user: { displayName, photoURL, uid },
      } = await signInWithPopup(auth, googleProvider);
      setUser({ name: displayName.split(" ")[0], photoURL, uid });
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Center minH="100vh">
      <Button
        onClick={signInWithGoogle}
        bgColor="white"
        borderRadius="full"
        color="black"
      >
        <Icon as={FaGoogle} mr="12.5px" fill="#EA4335" boxSize={5} />
        Continue with Google
      </Button>
    </Center>
  );
}
