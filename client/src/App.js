import { Box } from "@chakra-ui/react";
import Auth from "./Auth/Auth";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./config/firebase.config";
import Button from "./pages/Button";
import Posts from "./pages/Posts";
import Reflection from "./pages/Reflection";
import UserContext from "./store/user-context";
import { useContext } from "react";

function App() {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser({
        name: user.displayName.split(" ")[0],
        photoURL: user.photoURL,
        uid: user.uid,
      });
    });
    return unsubscribe;
  }, [setUser]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Button />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Reflection" element={<Reflection />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
