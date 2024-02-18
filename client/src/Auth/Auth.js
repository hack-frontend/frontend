import { auth, googleProvider } from "../config/firebase.config";
import { signInWithPopup, signOut } from "firebase/auth";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import UserContext from "../store/user-context";
export default function Auth() {
  const userCtx = useContext(UserContext);

  const signInWithGoogle = async () => {
    try {
      const {
        user: { displayName, photoURL, uid },
      } = await signInWithPopup(auth, googleProvider);
      userCtx.setUser({ name: displayName.split(" ")[0], photoURL, uid });
    } catch (err) {
      console.log(err);
    }
  };
  return <Button onClick={signInWithGoogle}>Google</Button>;
}
